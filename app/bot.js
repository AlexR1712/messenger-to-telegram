var fs = require('fs');
var btn = require('./utils');
var util = require('util');
var login = require('facebook-chat-api');
var TelegramBot = require('node-telegram-bot-api');
var token = process.env.TELEGRAM_TOKEN;
var bot = new TelegramBot(token, {
    polling: true
});
var chatId = process.env.TELEGRAM_CHAT_ID;

var currentThread = '';

login({
    email: process.env.FB_EMAIL,
    password: process.env.FB_PASSWORD
}, function callback(err, api) {
    if (err) return console.error(err);
    api.listen(function callback(err, message) {
        api.getUserInfo([message.threadID], function (err, ret) {
            if (err) return console.error(err);
            var name = "";
            for (var prop in ret) {
                if (ret.hasOwnProperty(prop) && ret[prop].name) {
                    name = ret[prop].name
                }
            }
            switch (message.type) {
                case "message":
                    bot.sendMessage(chatId, name + ' (Messenger): ' + message.body, btn.inlineReply('✏️ Responder a ' + name, message.threadID));
                    break;
                case 'read_receipt':
                    bot.sendMessage(chatId, name + ' (Messenger): ✅ Visto ✅');
                    break;
                default:
                    bot.sendMessage(chatId, ' ERROR: NO EXISTE DE TIPO '+ message.type);
            }

        });


    });

    bot.on('callback_query', function(msg) {
        var user = msg.from.id;
        var data = msg.data;
        currentThread = data;
        bot.sendMessage(msg.from.id, "Escribe tu mensaje a '" + data + "'");
    });

    bot.on('message', function (msg) {
        console.log(msg.text);
        if (currentThread !== "") {
            api.sendMessage(msg.text, currentThread);
            bot.sendMessage(chatId, 'Mensaje Enviado');

        } else {
            bot.sendMessage(chatId, 'No se ha seleccionado la persona a la cual responder');
        }

    });

    bot.on('photo', function(msg) {
        if (currentThread !== "") {
            bot.downloadFile(msg.photo[msg.photo.length - 1].file_id, './images').then(function(path) {
                console.log(path);
                var msg = {
                    body: "",
                    attachment: fs.createReadStream(path)
                }
                api.sendMessage(msg, currentThread);

            });


        } else {
            bot.sendMessage(chatId, 'No se ha seleccionado la persona a la cual enviar la foto');
        }

    });

});