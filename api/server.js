// Include all external packages.
const express = require('express');
const cors = require('cors');

// Include Routers and Middleware
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const graphsRouter = require('../graphs/graphs-router.js');

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/graphs', graphsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Spider Graph</h1>')
});

module.exports = server;