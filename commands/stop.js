const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stops the music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    const embed = new MessageEmbed()
    .setDescription(`Il n'y a rien de jouer que je pourrais arrêter pour vous.`)
    .setFooter(`Un problème est survenu :(`)
    .setColor('#FF0000');
    if (!queue) return message.reply(embed).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    const embed2 = new MessageEmbed()
    .setDescription(`J'ai bien quitté le salon, si vous voulez écouter de la musique \`h24/7\` taper \`b!afk\`.`)
    .setFooter(`Un problème est survenu :(`)
    .setColor('#FF0000');
    queue.textChannel.send(embed2).catch(console.error);
  }
};
