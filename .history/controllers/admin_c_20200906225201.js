const express = require('express');
const router = express.Router();

const admin_model = require("../models/models/admin_M.js");
const User = require("../models/POJO/user_POJO.js");

router.get("/admin/register",(req,res)=>{

    res.render("admin/register",{

        title : "Register Controller"
    });
})

router.post("/admin/register",(req,res)=>{

    const user = new User();

    
    admin_model.create_a_user(user)
    .then(()=>{


    })
    .catch(err=>console.log(`Error: ${err}`));
    
    res.redirect("/")

});

router.get("/admin/dashboard",(req,res)=>{

    res.render("admin/admin_dashboard",{

        title : "Admin Dashboard Controller"
    });
})

module.exports = router;