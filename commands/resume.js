const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageCollector, MessageEmbed } = require("discord.js");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Resume currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      const embed = new MessageEmbed()
      .setAuthor(`La musique a repris!`, `https://images-ext-1.discordapp.net/external/t_5yhQN_a9TrojBBK5hvlnvtONg63Y5m2QlckjXRPdw/https/media.discordapp.net/attachments/760544842366976083/799027722575151134/image0.gif`)
      .setColor('#FFFF00')
      .setDescription(`:arrow_forward: Reprise de la musique pour vous!`)
      return queue.textChannel.send(embed).catch(console.error);
    }
    const embed2 = new MessageEmbed()
   // .setAuthor(`La musique a repris!`, `https://images-ext-1.discordapp.net/external/t_5yhQN_a9TrojBBK5hvlnvtONg63Y5m2QlckjXRPdw/https/media.discordapp.net/attachments/760544842366976083/799027722575151134/image0.gif`)
    .setColor('#FF0000')
    .setDescription(`Il n'y a rien qui joue sur ce serveur.`)
    .setFooter(`Un problème est survenu :(`)
    return message.channel.send(embed2).catch(console.error);
  }
};
