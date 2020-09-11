const express = require("express");
const router = express.Router();
const task_model = require("../models/models/task_MDL.js");
const Task = require("../models/POJO/task_POJO.js");

router.get("/dashboard",(req,res)=>{

    res.render("task/task_dashboard",{

        title : "Task Dashboard Controller"
    });
});

router.post("/dashboard",(req,res)=>{

    const new_task = new

    task_model.create_a_task()
    res.redirect("/task/dashboard")

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