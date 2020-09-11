const mysql = require('mysql2/promise');

const mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });

  const mySQL_DB = 
  {
      init()
      {
        
      }
  }

  module.exports = mysql;