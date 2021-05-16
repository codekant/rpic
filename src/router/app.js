const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    res.sendStatus(200);
});

module.exports = app;