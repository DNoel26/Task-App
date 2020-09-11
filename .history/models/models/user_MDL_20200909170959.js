const db = require("../../config/MySQLDAO.js");
const User = require("../POJO/user_POJO.js");

const user_model = 
{
    SQL : "",

    get_a_user_by_email(user_email, user_username)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `SELECT * FROM user WHERE email = ? OR username = ?`;
            db.connection.query(this.SQL,[user_email, user_username])
            .then(([rows,fields])=>{
                
                if(rows.length > 0)
                {
                    const selected_user = new User;

                    selected_user.first_name = rows[0].first_name;
                    selected_user.last_name = rows[0].last_name;
                    selected_user.username = rows[0].username;
                    selected_user.email = rows[0].email;
                    selected_user.id = rows[0].user_id;
                    selected_user.role = rows[0].role;
                    selected_user.status = rows[0].is_active;
                    selected_user.password = rows[0].password;
                    selected_user.img_path = rows[0].img_path;
                    selected_user.gender = rows[0].gender;
                    selected_user.date_created = rows[0].date_created;
                    selected_user.last_modified = rows[0].last_modified;
                    
                    console.log(`The user for "Get User By Email" selected_user`);
                    //console.log(selected_user.username);
                    //console.log(selected_user.password);

                    resolve(selected_user);
                }

                else
                {
                    resolve(null);
                }
            })
            .catch(err=>reject(err));
        }) 
    },

    upload_photo(user_id)
    {

    }
}

module.exports = user_model;