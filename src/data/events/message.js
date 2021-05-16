const Discord = require("discord.js");

module.exports = (client, message) => {
    if(!message.guild && !message.author.bot) return message.channel.send({
        embed: new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setDescription(`Sorry, commands aren't meant to work in our DMs. [Invite](${client.inviteURL} "Click on this link to invite me to your server/guild.") me to a server to use my commands!`)
    });
    let prefix = process.env.PREFIX;
    if(message.author.bot || !message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/);
    let cmd = args.shift();
    if(client.commands.has(cmd)) {
        let props = client.commands.get(cmd);
        if(props.info.category == "developer" && !process.env.OWNERS.split(",").includes(message.author.id)) return;
        if(props.info.category == "admin" && message.member.hasPermission("ADMINISTRATOR")) return;
        props.run(client, message, args);
        if(Math.random() > 0.9) message.channel.send(`Pro Tip - **${client.tip()}**`).catch(o_0 => {});
    } else if (client.aliases.get(cmd)) {
            let props = client.aliases.get(cmd);
            if(props.info.category == "developer" && !process.env.OWNERS.split(",").includes(message.author.id)) return;
            if(props.info.category == "admin" && message.member.hasPermission("ADMINISTRATOR")) return;
            props.run(client, message, args);
            if(Math.random() > 0.9) message.channel.send(`Pro Tip - **${client.tip()}**`).catch(o_0 => {});
        }
}