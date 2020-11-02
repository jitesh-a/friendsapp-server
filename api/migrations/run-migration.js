
const env = process.env.MODE || 'development';
// get the client
const mysql = require('mysql2/promise');
// connect to db
const config = require('../db/config');
require('../db/connect')()
  .then(connectionPool => {
    const SQL = require('./backup')(config[env].database);
    connectionPool.execute(SQL);
  })
  .catch(error => {
    console.error(`Failed to perform migration ${JSON.stringify(error)}`);
  });