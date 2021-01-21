const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      
     // .setDescription("List of all commands")
      .setAuthor(`Informations et commandes`, `https://media.discordapp.net/attachments/760544842366976083/799027722575151134/image0.gif`)
      .addField(`:musical_note:  Musique - (15)`, `\`play\`, \`stop\`, \`skip\`, \`volume\`, \`pause\`, \`loop\`, \`queue\`, \`search\`, \`skipto\`, \`nowplaying\`, \`pruning\`, \`shuffle\`, \`lyrics\`, \`resume\`, \`afk\``, false)
      .addField(`:hammer_pick:  Général - (6)`, `\`help\`, \`invite\`, \`user-info\`, \`role-info\`, \`ping\`, \`bot-info\``, false)
      .setImage(`https://media.discordapp.net/attachments/798065575875313675/800028258594062367/spectre_2.gif?width=930&height=527`)
      .setColor("black")
      .setTimestamp()
      .setFooter(`4kMusic`, `https://media.discordapp.net/attachments/760544842366976083/799027722575151134/image0.gif`)

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
