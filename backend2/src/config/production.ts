// production.js
module.exports = {
    database: {
      host: 'prod-host',
      port: 27017,
      dbName: 'prod-database'
    },
    server: {
      port: process.env.PORT || 3000
    },
    jwtSecretKey: 't9rXw5bF2mS7zQ8p',
  };