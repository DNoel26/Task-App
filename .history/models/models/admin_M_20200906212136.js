const db = require("../../config/MySQLDAO.js");

const admin_model = 
{
    SQL : "",

    create_a_user()
    {
        this.SQL = "INSERT INTO user"
        db.connection.query()
    },

    
    delete_a_user(user_id)
    {

    }
};