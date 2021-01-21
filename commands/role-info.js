const Discord = require('discord.js');

module.exports = {
  name: "role-info",
  description: "Toggle pruning of bot messages",
  execute(message) {
    let therole = message.mentions.roles.first();
    if(!therole) return message.reply(`Specify a role!`)
    if (therole.mentionable === true) {
        mentionable = ":x: Pas Mentionnable";
    } else {
        mentionable = "✅ Mentionnable";
    }
    let theroleembed = new Discord.MessageEmbed()
    .setTitle(`:man_frowning: Informations D'un Roles !`)
    .setColor('2F3136')
    .addField(`:id: ID`,`${therole.id}`, true)
    .addField(`:information_source: Nom du role`,`${therole.name}`, true)
    .addField(`:pushpin: Mention`,`\`${therole}\``, true)
    .addField(`:books: La Couleur :`,`${therole.hexColor}`, true)
    .addField(`:man_frowning: Members:`,`${therole.members.size}`, true)
    .addField(`:map: La Position`, `${therole.position}`, true)
    .addField(`:ticket: Mentionable`, `${mentionable}`, true)
    .setTimestamp()
    
    message.channel.send(theroleembed);
    }
};
