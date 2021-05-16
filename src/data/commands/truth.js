const Discord = require("discord.js");
const truths = require('../../raw/truths.json');
module.exports = {
    info: {
        name: "truth",
        description: "A question which you shall be honest to answer",
        aliases: ["tr"],
        category: "game"
    },
    run: async(client, message, args) => {
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setAuthor("Truth", client.user.displayAvatarURL())
            .setDescription(`**${truths[Math.floor(Math.random() * truths.length)]}**`)
            .setFooter("Requested by " + message.author.tag)
            .setColor(process.env.COLOR)
        });
    }
}