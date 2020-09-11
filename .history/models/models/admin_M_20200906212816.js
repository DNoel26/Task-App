const db = require("../../config/MySQLDAO.js");

const admin_model = 
{
    SQL : "",

    create_a_user()
    {
        this.SQL = `INSERT INTO user(first_name, last_name, email, password, gender, img_path) VALUES(?,?,?,?,?,?)`;
        db.connection.query(this.SQL, [user.first_name, user.last_name, user.email, user.password, user.gender, "default.jpg"])
    },

    
    delete_a_user(user_id)
    {

    }
};