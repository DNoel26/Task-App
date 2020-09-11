const db = require("../../config/MySQLDAO.js");

const user_model = 
{
    SQL : "",

    get_a_user_by_email(user_id)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `SELECT * FROM user WHERE user_id = ?`;
            db.connection.query(this.SQL,[user_id])
            .then(([rows,fields])=>{
                    
                const selected_user = new User;

                selected_user.first_name = rows[0].first_name;
                selected_user.last_name = rows[0].last_name;
                selected_user.username = rows[0].username;
                selected_user.email = rows[0].email;
                selected_user.id = rows[0].user_id;
                selected_user.role = rows[0].role;
                selected_user.status = rows[0].is_active;

                resolve(selected_user);
            })
            .catch(err=>reject(err));
        }) 
    },

    upload_photo(user_id)
    {

    }
}