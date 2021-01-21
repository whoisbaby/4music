const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
 
module.exports = {
    name: "bot-info",
    aliases: ["bi"],
    description: "Get bot info",
    async execute(message) {
        let { version } = require("discord.js");
 
        cpuStat.usagePercent(function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
 
 
            let duration = moment.duration(message.client.uptime)
            let embedStats = new Discord.MessageEmbed()
                .setAuthor("4Music Blue")
                .setTitle("**__Stats:__**")
                .setColor("#2f3136")
                .addField("\`⌛\`**Mem Usage** ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
                .addField("\`⏲\`**Uptime** ", (Math.round(message.client.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(message.client.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(message.client.uptime / (1000 * 60)) % 60) + " min, est " + (Math.round(message.client.uptime / 1000) % 60) + " sec", true)
                .addField("\`📂\`**Users** ", `${message.client.guilds.cache.filter(g => g.available).reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
                .addField("\`📂\`**Servers**", `${message.client.guilds.cache.size.toLocaleString()}`, true)
                .addField("\`📂\`**Channels**", `${message.client.channels.cache.size.toLocaleString()}`, true)
                .addField("\`👾\`**Discord.js** ", `v${version}`, true)
                .addField("\`🤖\`**Node **", `${process.version}`, true)
                .addField("\`🤖\`**CPU** ", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("\`🤖\`**CPU usage** ", `\`${percent.toFixed(2)}%\``, true)
                .addField("\`🤖\`**Arch**", `\`${os.arch()}\``, true)
                .addField("\`💻\`**Platform**", `\`\`${os.platform()}\`\``, true)
                .addField(`**Bot Latency**`, `${Math.round(message.client.ws.ping)} ms`)
 
            message.channel.send(embedStats)
        })
 
 
 
    }
}