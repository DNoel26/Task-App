const mysql = require('mysql2/promise');

const mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });

  module.exports = mysql;