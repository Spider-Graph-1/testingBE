const knex = require('knex');
const config = require('../knexfile.js')

const db = knex(config.development);
// use environment variable when deploying to Heroku.
module.exports = db;