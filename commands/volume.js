const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Change volume of currently playing music",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    const embed3 = new MessageEmbed()
    .setDescription(`Vous ne pouvez pas régler le volume à plus de 100. ou inférieur à 0`)
    .setFooter(`Un problème est survenu :(`)
    .setColor('#FF0000');
    const embed2 = new MessageEmbed()
    .setDescription(`Il n'y a rien qui joue sur ce serveur.`)
    .setFooter(`Un problème est survenu :(`)
    .setColor('#FF0000');
    const embed4 = new MessageEmbed()
    .setDescription(`Je règle le volume sur: **${args[0]}/100**`)
    .setAuthor(`Gestionnaire de volume de serveur`, `https://images-ext-1.discordapp.net/external/t_5yhQN_a9TrojBBK5hvlnvtONg63Y5m2QlckjXRPdw/https/media.discordapp.net/attachments/760544842366976083/799027722575151134/image0.gif`)
    .setColor('blue');
    if (!queue) return message.channel.send(embed2).catch(console.error);
    if (!canModifyQueue(message.member))
      return message.channel.send(embed2).catch(console.error);

    if (!args[0]) return message.channel.send(`Le volume actuel est: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.channel.send(":notes: Chiffres uniquement!").catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0 )
      return message.channel.send(embed3).catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    return queue.textChannel.send(embed4).catch(console.error);
  }
};
