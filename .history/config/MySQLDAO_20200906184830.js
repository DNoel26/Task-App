const mysql = require('mysql2/promise');

const mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });

const mySQL_DB = 
{
    connection : null,

    init()
    {
        mysql.createConnection
        ({
            host: `${process.env.mySQL_HOST}`,
            user: `${process.env.mySQL_USER}`,
            database: `${process.env.mySQL_DATABASE}`,
            password: `${process.env.mySQL_PASSWORD}`,
        });
        .then(()=>{

            
        })
    }
}

  module.exports = mysql;