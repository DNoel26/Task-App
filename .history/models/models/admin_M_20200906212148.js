const db = require("../../config/MySQLDAO.js");

const admin_model = 
{
    SQL : "",

    create_a_user()
    {
        this.SQL = "INSERT INTO user(first_name, last_name, email"
        db.connection.query()
    },

    
    delete_a_user(user_id)
    {

    }
};