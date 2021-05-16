const Discord = require("discord.js");
module.exports = {
    info: {
        name: "avatar",
        description: "Show someone's avatar",
        aliases: ["av", "pfp"],
        category: "random"
    },
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setDescription(`[\`default\`](${user.displayAvatarURL({ size: 2048 })}) [\`webp\`](${user.displayAvatarURL({ size: 2048, format: "webp" })}) [\`png\`](${user.displayAvatarURL({ size: 2048, format: "png" })}) [\`jpeg\`](${user.displayAvatarURL({ size: 2048, format: "jpeg" })})`)
            .setImage(user.displayAvatarURL({ size: 4096 }))
            .setFooter(`${user.username}'s Avatar`)
        });
    }
}