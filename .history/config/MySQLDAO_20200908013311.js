const mysql = require('mysql2/promise');

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
        })
        .then((conn)=>{

            this.connection = conn;
            console.log("Database is up and running!");
        })
        .catch(err=>console.log(`Error: ${err}`))
    }
}

  module.exports = mySQL_DB;