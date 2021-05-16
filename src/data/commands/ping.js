module.exports = {
    info: {
        name: "ping",
        description: "Check bot's latency",
        aliases: ["pong"],
        category: "misc"
    },
    run: async(client, message, args) => {
        message.channel.send("Awaiting...")
        .then(m => {
            m.edit(`${Math.floor(Date.now() - m.createdTimestamp)}ms`)
        });
    }
}