const Discord = require("discord.js");
module.exports = {
    info: {
        name: "invite",
        description: "Get an invite link for the bot",
        aliases: ["inv", "links"],
        category: "misc"
    },
    run: async(client, message, args) => {
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setAuthor("Links", client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`[Invite](${client.inviteURL} "Click on this to invite me to your server!") me to your server, and also make sure you join our [Support Server](https://discord.gg/DFpvmnRp6U)`)
        })
    }
}