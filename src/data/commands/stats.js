const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    info: {
        name: "stats",
        description: "Check bot's statistics",
        aliases: ["stats"],
        category: "misc"
    },
    run: async(client, message, args) => {
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setAuthor("Statistics", client.user.displayAvatarURL())
            .setDescription(`**Websocket**\nLatency - \`${client.ws.ping}ms\`\nShards - \`${client.ws.shards.size} shards\`\nUptime - \`${moment.duration(client.uptime).format("DD:HH:mm:ss")}\`\n\n**Counters**
Guilds - \`${client.guilds.cache.size}\`
Channels - \`${client.channels.cache.size}\`
Users - \`${client.users.cache.size}\`
            
**Project**
Node - \`${process.version}\`
Discord.js - \`v${Discord.version}\`
Rpic - \`v${require('../../../package.json').version}\``)
            .setFooter(`This project is open source on github @ codekant/rpic`)
            .setThumbnail(client.user.displayAvatarURL())
        })
    }
}