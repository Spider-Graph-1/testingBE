// Include all external packages.
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Include Routers and Middleware
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const graphsRouter = require('../graphs/graphs-router.js');

const authenticate = require('../auth/authenticate-middleware.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);
server.use('/api/graphs', authenticate, graphsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Spider Graph</h1>')
});

module.exports = server;