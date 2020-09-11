const db = require("../../config/MySQLDAO.js");

const admin_model = 
{
    SQL : "",

    create_a_user(user)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `INSERT INTO user(first_name, last_name, username, email, password, gender, img_path) VALUES(?,?,?,?,?,?,?)`;
            db.connection.query(this.SQL, [user.first_name, user.last_name, user.username, user.email, user.password, user.gender, "default.jpg"])
            .then(()=>{

                resolve();
            })
            .catch(err=>reject(err));
        }) 
    },

    
    delete_a_user(user_id)
    {

    }
};

module.exports = admin_model;