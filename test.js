var fs = require('fs');
var express = require('express')
var app = express()
var util = require('util');
var login = require("facebook-chat-api");
var TelegramBot = require('node-telegram-bot-api');
var token = '337192584:AAEHxNNxFx4bN5BZWIHMfvO14-gWBslTrJ8';
var bot = new TelegramBot(token, {polling: true});
var chatId = 133433434;
//bot.sendMessage(chatId, "Catherine (Messenger): "+'Received your message');

function btnReply(text,callback_data) {
      var opts = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: text,
                callback_data: callback_data
              }
            ]
          ]
        }
      };    
      return opts;
}

bot.onText(/(.+)$/, function (msg, match) {

  bot.sendMessage(msg.from.id, 'Original Text', btnReply('Responder','ID DE Messenger'));
});

bot.on('callback_query', function(msg) {
    var user = msg.from.id;
    var data = msg.data;
    bot.sendMessage(msg.from.id, "You clicked button with data '"+ data +"'");
});