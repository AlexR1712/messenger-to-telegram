module.exports = {
    // Buttons
    inlineReply: function (text, callback_data) {
        return {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: text,
                        callback_data: callback_data
                    }]
                ]
            }
        };
    }
      
};
