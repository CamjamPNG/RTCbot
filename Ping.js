/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!ping') {
    // Send "pong" to the same channel
    message.channel.send('idk your ping do u think im sort of bot, well i am in new ok');
  }
});

client.on('ready', () => {
  console.log('I am ready 2.0!');
});


// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NzQxNzIwNjIyMDQ3OTUyOTk3.Xy7rKA.w215qzzG37yYuGaUgTXH2KWV_44');