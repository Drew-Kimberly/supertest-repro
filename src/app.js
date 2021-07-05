const express = require('express');
const app = express();

app.use((req, _res, next) => {
    const { v4: uuidV4 } = require('uuid');
    req.id = uuidV4();
    next();
});

app.get('/', (req, res) => {
    res.json({ requestId: req.id });
});

module.exports = app;
