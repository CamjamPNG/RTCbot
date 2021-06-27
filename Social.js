
const { Client, MessageEmbed } = require('discord.js');

const client = new Client();


 
client.on('ready', () => {
  console.log('I am ready To share Socials!');
});

client.on('message', message => {
  if (message.content === '!Social') {
    const embed = new MessageEmbed()
      .setTitle('Socials')
      .setColor(0xff0000)
      .setDescription('linktree: linktr.ee/Roblox_RTC');
    message.channel.send(embed);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NzQxNzIwNjIyMDQ3OTUyOTk3.Xy7rKA.w215qzzG37yYuGaUgTXH2KWV_44');
