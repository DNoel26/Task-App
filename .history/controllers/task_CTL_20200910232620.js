const express = require("express");
const router = express.Router();
const task_model = require("../models/models/task_MDL.js");
const Task = require("../models/POJO/task_POJO.js");
const {user_add_task_form} = require("../middleware/validation_MW.js")

router.get("/dashboard",(req,res)=>{

    task_model.get_all_tasks()
    .then((displayed_tasks_arr)=>{

        res.render("task/task_dashboard",{

            title : "Task Dashboard Controller",
            displayed_tasks_arr
        });    
    })
    .catch(err=>console.log(`Error Log: ${err}`))
    
});

router.post("/dashboard",user_add_task_form,(req,res)=>{

    task_model.create_a_task(req.new_task)
    .then(()=>{

        res.redirect("/task/dashboard")
    })
    .catch(err=>console.log(`Error Log (router.post /dashboard): ${err}`))
});

router.get("/edit",(req,res)=>{

    res.render("task/edit_task",{

        title : "User Edit Task Controller"
    });
});

router.get("/add",(req,res)=>{

    res.render("task/add_task",{

        title : "User Add Task Controller"
    });
});

module.exports = router;