require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;

bot.once('ready', () => {
  console.log(`Hello, I am ${bot.user.tag}!`);
});

<<<<<<< HEAD
bot.on("message", (message) => {
  if (message.content.includes("hello")) {
    message.reply(`Hello I am ${bot.user.tag}!\n`);
    message.channel.send("How can I help you?");
  } else if (message.content.includes("jasmine")) {
    message.reply(`Yes! Let's talk about Jasmine testing!\n`);
    message.channel.send(
      "To see the official documentation follow this link: https://jasmine.github.io/"
    );
  } else {
    message.channel.send(`Is there anything else I can help you with today?`);
=======
bot.on('message', (message) => {
  const msg = message.content.toLowerCase();

  if (msg.includes('hello')) {
    message.reply(`What's poppin I am ${bot.user.tag}!\n`);
    message.channel.send('How can I help you?');
  } else if (msg.includes('jasmine')) {
     message.channel.send('Yes! Let\'s talk about testing!\n What programming langauge are you looking for?');
  } else if (msg.includes('javascript')) {
    message.channel.send('iJS (im just sayin) this might help: https://bit.ly/398eWFE');
    message.reply('Does that help?');
  } else if (msg.includes('python')) {
    message.channel.send('I love py! Thisss might help: https://bit.ly/3fFd4Xd');
    message.reply('Does that help?');
  } else if (msg === 'ruby') {
    message.channel.send('You said ruby? Okay, here\'s a gem for you: https://bit.ly/3h8FaKG');
    message.reply('Does that help?');
>>>>>>> a26d657c35577d5710956cd121dd470800c59981
  }
});

bot.login(TOKEN);
