const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log(' you can invte me now !');
  });

    client.on('message', message => {
  if (message.content === '!invite') {
    const embed = new MessageEmbed()
      .setTitle('invite')
      .setColor(0xff9600)
      .setDescription('Invite to your server: https://discord.com/api/oauth2/authorize?client_id=741720622047952997&permissions=0&scope=bot');
    message.channel.send(embed);
   }
});

client.login('NzQxNzIwNjIyMDQ3OTUyOTk3.Xy7rKA.w215qzzG37yYuGaUgTXH2KWV_44');