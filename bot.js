const TelegramBot = require("node-telegram-bot-api");

const token = "8221744704:AAHzrCwArNIZmXHVhr1EFeb2dZwFfhjDMSI"; // Replace with your bot token
const bot = new TelegramBot(token, { polling: true });

// Welcome message
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome!");
});

// Reply "Hello" to any message
bot.on("message", (msg) => {
  if (msg.text && msg.text !== "/start") {
    bot.sendMessage(msg.chat.id, "Hello");
  }
});
