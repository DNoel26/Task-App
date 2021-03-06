const express = require('express');
const router = express.Router();

const admin_model = require("../models/models/admin_MDL.js");
const User = require("../models/POJO/user_POJO.js");
const {user_register_form} = require("../middleware/validation_MW.js");
const authorize 
//const {encrypt} = require("../middleware/encrypt_MW.js");

router.get("/register",(req,res)=>{

    res.render("admin/register",{

        title : "Register Controller"
    });
})

router.post("/register",user_register_form,(req,res)=>{

    admin_model.create_a_user(req.created_user)
    .then(()=>{

        res.redirect("/admin/dashboard");
    })
    .catch(err=>console.log(`Error - USER CREATION : ${err}`));
});

router.get("/dashboard",(req,res)=>{

    admin_model.get_all_users()
    .then((displayed_users_arr)=>{

        res.render("admin/admin_dashboard",{

            title : "Admin Dashboard Controller",
            displayed_users_arr
        });    
    })
    
})

router.delete("/delete/:id",(req,res)=>{

    admin_model.delete_a_user(req.params.id)
    .then(()=>{

        res.redirect("/admin/dashboard");
    })
    .catch(err=>console.log(`Error : ${err}`));
})

module.exports = router;