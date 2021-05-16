module.exports = {
    info: {
        name: "invite",
        description: "Get an invite link for the bot",
        aliases: ["inv"],
        category: "misc"
    },
    run: async(client, message, args) => {
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
            .setDescription(`[Invite](${client.inviteURL} "Click on this to invite me to your server!") me to your server!`)
        })
    }
}