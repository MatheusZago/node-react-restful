const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'postgres',    
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'registers'
  }
});

module.exports = db;