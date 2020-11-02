// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');

const config = {
  development: {
    host: 'sql12.freemysqlhosting.net',
    port: '3306',
    user: 'sql12373399',
    password: '28AI7ZhwAM',
    database: 'sql12373399',
    Promise: bluebird,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
  production: {
    host: 'sql12.freemysqlhosting.net',
    port: '3306',
    user: 'sql12373399',
    password: '28AI7ZhwAM',
    database: 'sql12373399',
    Promise: bluebird,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
};

module.exports = config;
