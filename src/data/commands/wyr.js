const Discord = require("discord.js");
const wyr = require('../../raw/wyr.json');
module.exports = {
    info: {
        name: "wouldyourather",
        description: "Would you rather do this or that?",
        aliases: ["wyr", "wouldyou"],
        category: "game"
    },
    run: async(client, message, args) => {
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setAuthor("Would You Rather", client.user.displayAvatarURL())
            .setDescription(`**${wyr[Math.floor(Math.random() * wyr.length)]}**`)
            .setFooter("Requested by " + message.author.tag)
            .setColor(process.env.COLOR)
        });
    }
}