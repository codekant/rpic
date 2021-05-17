/* rpic - Truth or Dare bot */
/* Built by Kant */
/* src/raw contains all the dares, truths, and etc lines as an array in json files. */
/* most of the lines in src/raw is taken from opensource github projects and looking through their files. */
/* only a few among those lines are written by me. */
/* My website - https://kant.gq */

/* Code begins here */
require("dotenv").config();
const Discord = require("discord.js");
const express = require("express");
const fs = require('fs');
const tips = require("./raw/protips.json");

const client = new Discord.Client();
client.commands = new Map();
client.aliases = new Map();
require("./handlers/assign")(fs, client);
client.tip = function() {
    var tip = tips[Math.floor(Math.random() * tips.length)];
    tip = tip.replace("{prefix}", process.env.PREFIX);
    return tip;
}

const app = express();
app.use(require('./router/app'));
app.use("/api", require('./router/api'))
app.listen((process.env.PORT || 80), function() {
    console.log("[SERVER] Listening on PORT " + process.env.PORT || 80);
});

client.login(process.env.DISCORD_TOKEN);