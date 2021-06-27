const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const token = 'NzQxNzIwNjIyMDQ3OTUyOTk3.Xy7rKA.w215qzzG37yYuGaUgTXH2KWV_44';

client.on('ready', () => {
  console.log('CAKE CAKE CAKE CAKE CAKE CAKE!');
  });

  client.on('message', message => {
  if (message.content === '!Cake') {
    const embed = new MessageEmbed()
      .setTitle('CAKE')
      .setColor(0xff9600)
      .setDescription('I love CAKE');
    message.channel.send(embed);
   }
});

client.login(token);