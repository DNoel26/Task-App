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
        mysql.createConnection
        ({
            host: `${process.env.mySQL_HOST}`,
            user: `${process.env.mySQL_USER}`,
            database: `${process.env.mySQL_HOST}`,
            password: `${process.env.mySQL_PASSWORD}`,
        });
    }
}

  module.exports = mysql;