const TelegramBot = require('node-telegram-bot-api');

const token = '5809369871:AAGIgLfCilhkB2Te_FALcqjpG30nR3RPaFc'; 
// Replace with your bot's token
const bot = new TelegramBot(token, { polling: true });

bot.onText(/hi/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'hi 2');
});
