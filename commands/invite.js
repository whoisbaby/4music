const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    let helpEmbed = new MessageEmbed()
  .setTitle(`Lien`)
  .addField(`**Support Server**`, `[Cliquez ici](https://discord.gg/oneforall)`)
  .addField(`**Bot Invite**`, `[Cliquez ici](https://discord.gg/oneforall)`)
  .addField(`**Bot Site**`, `[Cliquez ici](https://discord.gg/oneforall)`)
message.channel.send(helpEmbed)
  }
};
