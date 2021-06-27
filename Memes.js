const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require('snekfetch');
const token = 'NzQxNzIwNjIyMDQ3OTUyOTk3.Xy7rKA.w215qzzG37yYuGaUgTXH2KWV_44'

client.on('message', message => {
  if (message.content === '!cute') loadCuties(message);
});

function loadCuties() {
   grab('https://www.reddit.com/r/aww.json?limit=100&?sort=top&t=all')
    .then(res => res.json())
    .then(json => json.data.children.map(v => v.data.url))
    .then(urls => postRandomCutie(urls));
}

function postRandomCutie(urls) {
  const randomURL = urls[Math.floor(Math.random() * urls.length) + 1];
  const embed = new Discord.RichEmbed({
    image: {
      url: randomURL
    }
  });
  message.channel.send(embed);
}

client.login(token);