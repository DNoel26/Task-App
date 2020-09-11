const express = require("express");
const router = express.Router();

router.get("/task/dashboard",(req,res)=>{

    res.render("task/task_dashboard",{

        title : "Task Dashboard Controller"
    });
});

router.get("/task/edit",(req,res)=>{

    res.render("task/edit_task",{

        title : "User Edit Task Controller"
    });
});

router.get("/user/add-task",(req,res)=>{

    res.render("task/add_task",{

        title : "User Add Task Controller"
    });
});

module.exports = router;