const Discord = require("discord.js");
const dares = require('../../raw/dares.json');
module.exports = {
    info: {
        name: "dare",
        description: "A dare which you must complete??",
        aliases: ["dr", "dares"],
        category: "game"
    },
    run: async(client, message, args) => {
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setAuthor("Dare", client.user.displayAvatarURL())
            .setDescription(`**${dares[Math.floor(Math.random() * dares.length)]}**`)
            .setFooter("Requested by " + message.author.tag)
            .setColor(process.env.COLOR)
        });
    }
}