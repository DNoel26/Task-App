const db = require("../../config/MySQLDAO.js");
const User = require("../POJO/task_POJO.js");

const user_model = 
{
    SQL : "",

    create_a_task(task)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `INSERT INTO task(title, description, user_id) VALUES(?,?,?)`;
            db.connection.query(this.SQL, [task.title, task.description, req.session.session_user.id])
            .then(()=>{

                resolve();
            })
            .catch(err=>reject(err));
        }) 
    },

    
    get_a_task_by_id(task_id)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `SELECT * FROM task WHERE task_id = ?`;
            db.connection.query(this.SQL,[task_id])
            .then(([rows,fields])=>{
                
                if(rows.length > 0)
                {
                    const selected_task = new User;

                    selected_task.title = rows[0]
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

                    resolve(selected_user);                    
                } 
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

            task_model.get_a_user_by_id(user_id)
            .then((selected_user)=>{

                if(selected_user.role == "admin")
                {
                    console.log("CANNOT DELETE AN ADMIN ROLE - admin_MDL.js");

                    resolve();
                }

                else
                {
                    this.SQL = `DELETE FROM user WHERE user_id = ?`;
                    db.connection.query(this.SQL, [user_id])
                    .then(()=>{

                        resolve();
                    })   
                }
            })
            
            
            .catch(err=>reject(err));
        }) 
    }
};

module.exports = task_model;