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
  }else if (msg === 'js') {
    message.channel.send('How\'s your attention span? Do you prefer: \n short vid: less than 10mins \n long reel: more than 20 mins \n or moderate: more than 10mins, less than 20 though');
  } else if (msg === 'short') {
    message.channel.send('You must like spongebob lol. !shade, check this out: https://www.youtube.com/watch?v=dFz2h7o0vqs&t=0s');
  } else if (msg === 'moderate') {
    message.channel.send('This is what I found: https://www.youtube.com/watch?v=rw4KlxKEENQ');
  } else if (msg === 'long') {
    message.channel.send('Oh, so you want a movie? This one had the highest ratings, grab some popcorn: https://www.youtube.com/watch?v=r9HdJ8P6GQI');
  }

  // python keyword
  else if (msg.includes('python')) {
    message.channel.send('I love py! Thisss might help: https://bit.ly/3fFd4Xd');
    message.reply('Does that help?');
  } else if (msg === 'py') {
    message.channel.send('How\'s your appetite? Do you prefer: \n small py: less than 10mins \n big py: more than 20 mins \n or medium py: more than 10mins, less than 20 though');
  } else if (msg === 'small') {
    message.channel.send('I didn\'t find that specific flavor, but this one might help: \n https://www.youtube.com/watch?v=1Lfv5tUGsn8&t=0s');
  } else if (msg === 'big') {
    message.channel.send('I didn\'t find that specific flavor, but this is one a tasty pie: \n https://www.youtube.com/watch?v=6tNS--WetLI');
  } else if (msg === 'medium') {
    message.channel.send('I didn\'t find that specific flavor, but this is a good snack: \n https://www.youtube.com/watch?v=_0soBPejyu4');
  }

  // ruby keyword
  else if (msg.includes('ruby')) {
    message.channel.send('Check you out! Okay, here\'s a gem for you: https://bit.ly/3h8FaKG');
    message.reply('Does that help?');
  } else if (msg === 'ror') {
    message.channel.send('How do you like your gems? Do you prefer: \n soft cut: less than 10mins \n rough cut: more than 20 mins \n or in between: more than 10mins, less than 20 though');
  }

  // yes no prompts
  else if (msg.includes('yes')) {
    message.channel.send('Dooope! I\'m out then');
  } else if (msg.includes('no')) {
    message.channel.send('Oh snap! Okay, what else do you need?');
  }

  // react keyword
  else if (msg.includes('react')) {
    message.channel.send('Oof! I remember those days. This helped me: https://bit.ly/2DHBX6r');
    message.reply('How\'s that?');
  }

  // videos keyword
  else if (msg.includes('videos')) {
    message.channel.send('Oh! You don\'t like reading either! Remind me which language again: JS, Py, RoR ?');
  }

});

bot.login(TOKEN);
