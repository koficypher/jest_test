const express = require('express');

const app = express();

app.get('/test', async (req, res) => {
    res.send({message: 'pass!'});
});

module.exports = app;