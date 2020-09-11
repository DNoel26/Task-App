const express = require("express");
const router = express.Router();

router.get("/task/dashboard",(req,res)=>{

    res.render("task/task_dashboard",{

        title : ""
    });
});

router.get("/user/edit-task",(req,res)=>{

    res.render("task/edit_task");
});

router.get("/user/add-task",(req,res)=>{

    res.render("task/add_task");
});

module.exports = router;