const Discord = require("discord.js")

module.exports = {
    info: {
        name: "help",
        description: "Shows all commands available on this bot.",
        aliases: ["commands"],
        category: "misc"
    },
    run: async(client, message, args) => {
        if(args[0]) {
            if(client.commands.has(args[0].toLowerCase())) {
                let cmd = client.commands.get(args[0].toLowerCase());
                message.channel.send({
                    embed: new Discord.MessageEmbed()
                    .setAuthor(cmd.info.name, client.user.displayAvatarURL())
                    .setDescription(cmd.info.description + `\n**Aliases** - ` + cmd.info.aliases.map(o => `\`${o}\``).join(", "))
                    .setColor(process.env.COLOR)
                    .setTimestamp()
                    .setThumbnail(client.user.displayAvatarURL())
                })
            } else if(client.aliases.has(args[0].toLowerCase())) {
                let cmd = client.aliases.get(args[0].toLowerCase());
                message.channel.send({
                    embed: new Discord.MessageEmbed()
                    .setAuthor(cmd.info.name, client.user.displayAvatarURL())
                    .setDescription(cmd.info.description + `\n**Aliases** - ` + cmd.info.aliases.map(o => `\`${o}\``).join(", "))
                    .setColor(process.env.COLOR)
                    .setTimestamp()
                    .setThumbnail(client.user.displayAvatarURL())
                })
            } else return message.channel.send({
                embed: new Discord.MessageEmbed()
                .setColor(process.env.COLOR)
                .setDescription(`There is no such command!`)
            });
            return;
        }
        let commands = Array.from(client.commands, ([name, value]) => value);
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setAuthor("Commands", client.user.displayAvatarURL())
            .addField("Misc", commands.filter(o => o.info.category == "misc").map(o => `\`${o.info.name}\``).join(", "))
            .addField("Game", commands.filter(o => o.info.category == "game").map(o => `\`${o.info.name}\``).join(", "))
            .addField("Random", commands.filter(o => o.info.category == "random").map(o => `\`${o.info.name}\``).join(", "))
            .setColor(process.env.COLOR)
            .setFooter("'help {command}' should give more details on that command/alias.")
            .setThumbnail(client.user.displayAvatarURL())
        })
    }
}