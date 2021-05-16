/* This file is for assigning all the files to their own Maps */
/* Events and Commands here */

module.exports = function(fs, client) {
    const files = fs.readdirSync("./src/data/events/").filter(o => o.endsWith(".js"));
    files.forEach(file => {
        let name = file.split(".")[0];
        let props = require(`../data/events/${file}`);
        client.on(name, props.bind(null, client));
    });
    const cmdFiles = fs.readdirSync("./src/data/commands/").filter(o => o.endsWith(".js"));
    cmdFiles.forEach(file => {
        let props = require(`../data/commands/${file}`);
        client.commands.set(props.info.name, props);
        props.info.aliases.forEach(o => {
            client.aliases.set(o, props)
        })
    })
}