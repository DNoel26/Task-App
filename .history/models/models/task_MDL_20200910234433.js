const db = require("../../config/MySQLDAO.js");
const Task = require("../POJO/task_POJO.js");
const mySQL_DB = require("../../config/MySQLDAO.js");

const task_model = 
{
    SQL : "",

    create_a_task(task,session_user_id)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `INSERT INTO task(title, description, user_id) VALUES(?,?,?)`;
            db.connection.query(this.SQL, [task.title, task.description, session_user_id])
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
                    const selected_task = new Task;

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

    
    get_all_tasks()
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `SELECT * FROM task`;
            db.connection.query(this.SQL)
            .then(([rows,fields])=>{

                const displayed_tasks_arr = [];

                rows.forEach(row => {
                    
                    const displayed_task = new Task;

                    displayed_task.title = rows[0].title;
                    displayed_task.description = rows[0].description;
                    displayed_task.user_id = rows[0].user_id;
                    displayed_task.date_created = rows[0].date_created;
                    displayed_task.last_modified = rows[0].last_modified;

                    displayed_tasks_arr.push(displayed_task);
                });

                resolve(displayed_tasks_arr);
            })
            .catch(err=>reject(err));
        }) 
    },
    
    
    delete_a_task(task_id)
    {
        return new Promise((resolve,reject)=>{

            this.SQL = `DELETE FROM task WHERE task_id = ?`
            db.connection.query(this.SQL,[task_id])
            .then(()=>{

                resolve();
            })
            .catch(err=>reject(err));
        }) 
    }
};

module.exports = task_model;