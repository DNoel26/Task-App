const express = require("express");
const router = express.Router();
const task_model = require("../models/models/task_MDL.js");

router.get("/dashboard",(req,res)=>{

    res.render("task/task_dashboard",{

        title : "Task Dashboard Controller"
    });
});

router.post("/dashboard",(req,res)=>{

    task_model.
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