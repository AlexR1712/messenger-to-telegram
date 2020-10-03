![Telegram](http://i.imgur.com/CGGLXFF.png)
![Messenger](http://i.imgur.com/VyvJz33.png)

# Messenger to Telegram

Connect your Facebook Messenger to Telegram Easily, because Telegram is better, and do messaging and increase your productivity.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
1. Nodejs
2. Create bot in Telegram with @botfather
3. You need a Facebook account
4. (Optional but recommended) you can use Docker/Docker Compose for fast deployment
```

### Installing

#### Using Docker

1. Clone this repository in your server/computer
2. Duplicate `docker-compose.yml` to `docker-compose-prod.yml` or simple run this `cp docker-compose.yml docker-compose-prod.yml`
3. Edit the enviroment variables with yours in `docker-compose-prod.yml` file, where the `TELEGRAM_CHAT_ID` can be get using the bot [@getidsbot](https://t.me/getidsbot), and the `TELEGRAM_TOKEN` can be obtained from [@BotFather](https://t.me/BotFather), and set `FB_EMAIL` with your facebook email or username, `FB_PASSWORD` place your facebook password.
4. Now launch your bot!, run this: `docker-compose -f docker-compose-prod.yml up`.
5. Now you will be able to receive and respond to messages from Facebook Messenger from Telegram :-)

## ToDo

- [x] Inline buttons.
- [x] Send photo from Telegram to Messenger.
- [x] Send media (photo, video, gif, voice) from Messenger to Telegram.
- [x] Group and private chat support
- [x] Easily change current chat.
- [ ] Show Contact List of Messenger in Telegram
- [ ] Multilanguage option.
- [x] Support for Gif.
- [x] Support for Stickers of Messenger.
- [ ] Support for file attachments.

### Credits

- [@AlexR1712](https://github.com/AlexR1712)
- [@Schmavery](https://github.com/Schmavery)
