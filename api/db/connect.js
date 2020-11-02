module.exports = (async () => {
  const env = process.env.MODE || 'development';
  // get the client
  const mysql = require('mysql2/promise');

  // create the connection, specify bluebird as Promise

  const config = require('./config');

  // const URL = `mysql://${config.user}:${config.password}@${config.host}/${config.db}?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700`;

  try {
    console.log(`Creating connection with configuration (${env}): ${JSON.stringify(config[env])}`);
    // const connection = await mysql.createConnection(config[env]);
    const pool = await mysql.createPool(config[env]);
    global.DB_CONNECTION_POOL = pool;
    console.log('Established connection to db!');
    return pool;
  } catch (error) {
    console.error(error);
  }
});
