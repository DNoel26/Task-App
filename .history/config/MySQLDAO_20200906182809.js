const mysql = require('mysql2');

const mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });