const TelegramBot = require('node-telegram-bot-api');

const token = '5809369871:AAGIgLfCilhkB2Te_FALcqjpG30nR3RPaFc'; 
// Replace with your bot's token
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/hi/, (msg) => {
  const chatId = msg.chat.id;
  const photoPath = 'https://telegra.ph/t1-10-26-2'; 
// Replace with the actual path of your image

  bot.sendPhoto(chatId, photoPath, {
    caption: 'Hello! This is your image.'
  });
});
