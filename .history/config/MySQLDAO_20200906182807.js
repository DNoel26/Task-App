const mysql = require('mysql2');

const mconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });