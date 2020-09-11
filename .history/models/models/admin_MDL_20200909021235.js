const db = require("../../config/MySQLDAO.js");
const User = require("../POJO/user_POJO.js");

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

    get_all_users()
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `SELECT * FROM user`;
            db.connection.query(this.SQL)
            .then(([rows,fields])=>{

                const displayed_users_arr = [];

                rows.forEach(row => {
                    
                    const displayed_user = new User;

                    displayed_user.first_name = row.first_name;
                    displayed_user.last_name = row.last_name;
                    displayed_user.username = row.username;
                    displayed_user.email = row.email;
                    displayed_user.id = row.user_id;
                    displayed_user.role = row.role;
                    displayed_user.status = row.is_active;

                    displayed_users_arr.push(displayed_user);
                });

                resolve(displayed_users_arr);
            })
            .catch(err=>reject(err));
        }) 
    },
    
    delete_a_user(user_id)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `DELETE FROM user WHERE user_id = ?`;
            db.connection.query(this.SQL, [user_id])
            .then(()=>{


                
                resolve();
            })
            .catch(err=>reject(err));
        }) 
    }
};

module.exports = admin_model;