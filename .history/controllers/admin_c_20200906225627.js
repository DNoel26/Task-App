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

    const created_user = new User();

    created_user.first_name = req.body.first_name;
    created_user.last_name = req.body.last_name;
    created_user.username = req.body.username;
    created_user.email = req.body.email;
    created_user.password = req.body.password;
    created_user.gender = req.body.gender;

    admin_model.create_a_user(user)
    .then(()=>{

        res.redirect("/");
    })
    .catch(err=>console.log(`Error: ${err}`));
});

router.get("/admin/dashboard",(req,res)=>{

    res.render("admin/admin_dashboard",{

        title : "Admin Dashboard Controller"
    });
})

module.exports = router;