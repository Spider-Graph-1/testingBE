// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  // testing: {
  //   client: 'pg',
  //   connection: {
  //     filename: 'postgresql://localhost/testing',
  //   },
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};