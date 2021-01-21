const { MessageCollector, MessageEmbed } = require("discord.js");
const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "pause",
  description: "Pause the currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      const helpEmbed = new MessageEmbed()
      .setColor("#F8AA2A")
      .setTitle('La musique a été mise en pause !')
      .setDescription(`:pause_button: Mettez la musique en pause pour vous !`)
      return queue.textChannel.send(helpEmbed).catch(console.error);
    }
  }
};
