const Discord = require('discord.js');
module.exports = {
    info: {
        name: "nhie",
        description: "Give someone the 'never have i' line lol",
        aliases: ["neverhaveiever", "never"],
        category: "game"
    },
    run: async(client, message, args) => {
        if(args[0] && args[0] == "help") {
            message.channel.send({
                embed: new Discord.MessageEmbed()
                .setAuthor("Never have I-", client.user.displayAvatarURL())
                .setDescription(require("../../raw/nhie.json").map(o => `\`${o.name}\` - \`${o.type}\`\n${o.description}\n`))
                .setFooter("Requested by " + message.author.tag)
                .setThumbnail(client.user.displayAvatarURL())
                .setColor(process.env.COLOR)
            });
            return;
        }
        let ctg = args.join(" ") || "Casual";
        let nhies = require("../../raw/nhie.json").find(e => e.name.toLowerCase().includes(ctg.toLowerCase()));
        if(!nhies) return message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setDescription(`No such category!`)
        });
        if((nhies.type == "nsfw" || nhies.type == "slight_nsfw") && !message.channel.nsfw) return message.channel.send({
            embed: new Discord.MessageEmbed()
            .setColor(process.env.COLOR)
            .setDescription(`This channel is not NSFW! 🔞`)
        });
        message.channel.send({
            embed: new Discord.MessageEmbed()
            .setAuthor("Never have I-", client.user.displayAvatarURL())
            .setDescription(`** Never have I ever ${nhies.item[Math.floor(Math.random() * nhies.item.length)]}**`)
            .setFooter("Requested by " + message.author.tag)
            .setColor(process.env.COLOR)
        });
    }
}