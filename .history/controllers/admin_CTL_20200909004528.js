const express = require('express');
const router = express.Router();

const admin_model = require("../models/models/admin_MDL.js");
const User = require("../models/POJO/user_POJO.js");
const {user_register_form} = require("../middleware/validation_MW.js");
const authenticate = require("../middleware/authentication_MW.js");

router.get("/admin/register",(req,res)=>{

    res.render("admin/register",{

        title : "Register Controller"
    });
})

router.post("/admin/register",user_register_form,authenticate,(req,res)=>{

    admin_model.create_a_user(req.created_user)
    .then(()=>{

        res.redirect("/admin/dashboard");
    })
    .catch(err=>console.log(`Error - USER CREATION : ${err}`));
});

router.get("/admin/dashboard",(req,res)=>{

    admin_model.get_all_users()
    .then((displayed_users_arr)=>{

        res.render("admin/admin_dashboard",{

            title : "Admin Dashboard Controller",
            displayed_users_arr
        });    
    })
    
})

router.delete("/admin/delete/:id",(req,res)=>{

    admin_model.delete_a_user(req.params.id)
    .then(()=>{

        res.redirect("")
    })
    .catch(err=>console.log(`Error : ${err}`));
})

module.exports = router;