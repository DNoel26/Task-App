const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{

    res.render("task/task_dashboard");
});

router.get("/",(req,res)=>{

    res.render("task/add_task");
});

router.get("/",(req,res)=>{

    res.render("task/add_task");
});



module.exports = router;