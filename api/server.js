// Include all external packages.
const express = require('express');

// Include Routers and Middleware
const authRouter = require('../auth/auth-router.js');

const server = express();
server.use(express.json());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send('<h1>Spider Graph</h1>')
});

module.exports = server;