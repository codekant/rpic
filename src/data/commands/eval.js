let Discord = require('discord.js');
module.exports = {
    info: {
        name: "eval",
        aliases: ["exec"],
        description: "execute javascript code snippets.",
        category: "developer"
    },
    run: async(client, message, args) => {
    if(!args[0]) return message.channel.send('Provide Code.')
    const evalargs = args;
    try {
      const code = evalargs.join(" ");
      let evaled = eval(code);
      const eargs = args.join(" ");
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      const embed = new Discord.MessageEmbed()
        .setTitle("Output")
        .setDescription(` \`\`\`${clean(evaled)}\`\`\` `, { code: "xl" })
        .addField("Input", ` \`\`\`${eargs}\`\`\` `)
        .setColor(process.env.COLOR);
      message.channel.send(embed).catch(err => {message.channel.send("Check logs idiot")
    console.error(err)});
    } catch (err) {
      const eargs = args.join(" ");
      const errorembed = new Discord.MessageEmbed()
        .setColor(process.env.COLOR)
        .setTitle("Error")
        .addField("Output", ` \`\`\`xl\n${clean(err)}\n\`\`\``)
        .addField("Input", ` \`\`\`${eargs}\`\`\` `);
      message.channel.send(errorembed).catch(err => {message.channel.send("Check logs idiot")
    console.error(err)});
    }
  }
}
function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }