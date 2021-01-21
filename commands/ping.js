const { MessageCollector, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Show the bot's average ping",
  execute(message) {
    const embed = new MessageEmbed()
    .setColor('2F3136')
    .addField(`Latence`, `${Math.round(message.client.ws.ping)} ms`)
    .setFooter(`8K`)
    .setTimestamp()
    message.channel.send(embed).catch(console.error);
  }
};
