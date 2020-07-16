require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;

bot.once("ready", () => {
  console.log(`Hello, I am ${bot.user.tag}!`);
});

bot.on("message", (message) => {
  if (message.content.includes("hello")) {
    message.reply(`Hello I am ${bot.user.tag}!\n`);
    message.channel.send("How can I help you?");
  } else if (message.content.includes("jasmine")) {
    message.channel.send(`Yes! Let's talk about Jasmine testing!`);
  }
});

bot.login(TOKEN);
