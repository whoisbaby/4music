const { MessageEmbed } = require("discord.js");
const moment = require('moment')
module.exports = {
  name: "user-info",
  aliases: ["userinfo"],
  description: "Check the uptime",
  execute(message, args) {
    let inline = true
    let resence = true
    const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: " Ne pas dérenger",
        offline: " Hors-Ligne/Invisble"
    }
    let mentionedUser = message.mentions.users.first() || message.author;
 
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author
 
    if (member.user.bot === true) {
        bot = "✅";
    } else {
        bot = "❌";
    }
    const roless = member.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString())
    .slice(0, -1);
 
    let embed = new MessageEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL())
        .setColor("#3792cb")
        .addField("Identifiant", member.user.id)
        .addField("Status", `${status[member.user.presence.status]}`)
        .addField("Surnom", `${member.user.username}`, inline)
        .addField("Bot ", `${bot}`)
        //.addField("Joue à :video_game: ", `${member.user.presence.game ? `${member.user.presence.game.name}` : ":nop: Ne joue pas"}`, inline, true)
        .addField(`Roles \`${roless.length}\``, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" | ") || "N'a pas de roles !"}`, true)
       // .addField("A rejoint Discord le :", moment(member.user.createdAt).format("LL"), true)
        //.setFooter(`Information a propos de ${member.user.username}`)
       // .addField(':date: Arriver sur le serveur', moment(message.guild.members.cache.get(member.id).joinedAt).format("LL"), true)
       // .setThumbnail(mentionedUser.displayAvatarURL)
        .setTimestamp()
 
    message.channel.send(embed);
 
  // message.delete();
}
}
