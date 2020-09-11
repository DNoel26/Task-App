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

                    selected_task.title = rows[0].title;
                    selected_task.description = rows[0].description;
                    selected_task.user_id = rows[0].user_id;
                    selected_task.date_created = rows[0].date_created;
                    selected_task.last_modified = rows[0].last_modified;

                    resolve(selected_task);                    
                } 
            })
            .catch(err=>reject(err));
        }) 
    },

    /*
    get_all_tasks()
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
    */
    
    delete_a_task(task_id)
    {
        return new Promise((resolve,reject)=>{

            SQL = 
            .then(()=>{

                resolve();
            })
            .catch(err=>reject(err));
        }) 
    }
};

module.exports = task_model;