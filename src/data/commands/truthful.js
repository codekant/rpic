const Discord = require("discord.js");
module.exports = {
    info: {
        name: "truthful",
        description: "See how truthful someone is!",
        aliases: ["howtruthful", "honesty"],
        category: "game"
    },
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;
        if(user.bot) return message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setDescription(`Bot's can't lie unless they're told to lol`)
        });
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setAuthor(`${user.tag} is ${Math.floor(Math.random() * 102)}% truthful!`, user.displayAvatarURL())
        });
    }
}