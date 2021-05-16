const Discord = require("discord.js");
module.exports = {
    info: {
        name: "reverse",
        description: "Reverse all the text you provided",
        aliases: ["rvrs"],
        category: "random"
    },
    run: async(client, message, args) => {
        if(!args.join(" ")) return message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setDescription(`Provide Text.`)
        });
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setDescription(args.join(" ").split("").reverse().join(""))
        });
    }
}