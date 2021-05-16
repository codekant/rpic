module.exports = (client) => {
    console.log("[CLIENT] Logged in as " + client.user.tag);
    client.user.setStatus("idle");
    client.user.setActivity("rpic help", { type: "LISTENING" });
    client.inviteURL = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=67161152&scope=bot`
}