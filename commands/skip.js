const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "Skip the currently playing song",
  execute(message) {
    const embed = new MessageEmbed()
    .setDescription(`Il n'y a rien que je pourrais sauter pour vous.`)
    .setFooter(`Un problème est survenu :(`)
    .setColor('#FF0000');
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.channel.send(embed).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ skipped the song`).catch(console.error);
  }
};
