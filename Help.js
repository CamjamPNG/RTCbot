
const { Client, MessageEmbed } = require('discord.js');

const client = new Client();
const token = 'NzQxNzIwNjIyMDQ3OTUyOTk3.Xy7rKA.w215qzzG37yYuGaUgTXH2KWV_44';

client.on('ready', () => {
  console.log('I am ready To Help!');
});

client.on('message', message => {
  if (message.content === '!Help') {
    const embed = new MessageEmbed()
      .setTitle('Help')
      .setColor(0xff0700)
      .setDescription('!ping: test, !kick: kicks the member, !ban; bans them,!Social, shares the RTC socials, !Cake: CAKE, !invite to invite me to your server! !maker to see who made this!');
    message.channel.send(embed);
  }
});



client.login(token);