const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log(' you can see who made the bot now !');
  });

    client.on('message', message => {
  if (message.content === '!maker') {
    const embed = new MessageEmbed()
      .setTitle('invite')
      .setColor(0xff9600)
      .setDescription('Twitter.com/camjam948 made the bot!');
    message.channel.send(embed);
   }
});

client.login('NzQxNzIwNjIyMDQ3OTUyOTk3.Xy7rKA.w215qzzG37yYuGaUgTXH2KWV_44');