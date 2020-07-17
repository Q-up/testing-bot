require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;

// make sure bot is connected
bot.once('ready', () => {
  console.log(`Hello, I am ${bot.user.tag}!`);
});

bot.on('message', (message) => {
  const msg = message.content.toLowerCase();

  // greetings
  if (msg.includes('hello')) {
    message.reply(`What's poppin I am ${bot.user.tag}!\n`);
    message.channel.send('How can I help you?');
  } else if (msg.includes('jasmine')) {
     message.channel.send('Let\'s talk about testing woot woot!\n What programming langauge are you looking for?');
  }

  // javascript keyword
  else if (msg.includes('javascript')) {
    message.channel.send('iJS (im just sayin) this might help: https://bit.ly/398eWFE');
    message.reply('Does that help?');
  } else if (msg === 'JS') {
    message.channel.send('How\'s your attention span? Do you prefer: \n short videos: less than 10mins \n long videos: more than 20 mins \n or in between: more than 10mins, less than 20 though');
  }

  // python keyword
  else if (msg.includes('python')) {
    message.channel.send('I love py! Thisss might help: https://bit.ly/3fFd4Xd');
    message.reply('Does that help?');
  }

  // ruby keyword
  else if (msg.includes('ruby')) {
    message.channel.send('Check you out! Okay, here\'s a gem for you: https://bit.ly/3h8FaKG');
    message.reply('Does that help?');
  } else if (msg.includes('yes')) {
    message.channel.send('Dooope! I\'m out then');
  } else if (msg.includes('no')) {
    message.channel.send('Oh snap! Okay, what else do you need?');
  } else if (msg.includes('react')) {
    message.channel.send('Oof! I remember those days. This helped me: https://bit.ly/2DHBX6r');
    message.reply('How\'s that?');
  } else if (msg.includes('videos')) {
    message.channel.send('Oh! You don\'t like reading either! Remind me which language again: JS, Py, RoR ?');
    // message.reply('How\'s that?');
  } 
});

bot.login(TOKEN);
