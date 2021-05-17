const express = require('express');
const app = express.Router();

let wyr = require('../raw/wyr.json');
let truth = require('../raw/truths.json');
let dare = require('../raw/dares.json');
let nhie = require('../raw/nhie.json');

app.get('/', (req, res) => {
    res.json({ data: "Parameter required" });
});
app.get("/wyr", (req, res) => {
    res.json({ data: wyr[Math.floor(Math.random() * wyr.length)] })
});
app.get("/dare", (req, res) => {
    res.json({ data: dare[Math.floor(Math.random() * dare.length)] })
});
app.get("/truth", (req, res) => {
    res.json({ data: truth[Math.floor(Math.random() * truth.length)] })
});
app.get("/nhie", (req, res) => {
    type = req.query.type || "normal";
    let nhie1 = nhie.filter(o => o.type == type.toLowerCase())[0];
    if(!nhie1) return res.json({ data: "Can't find that type of data." });
    res.json({ data: nhie1.item[Math.floor(Math.random() * nhie1.item.length)], type: nhie1.type })
});
module.exports = app;