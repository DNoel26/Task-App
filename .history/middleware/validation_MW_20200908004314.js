const express = require("express");
const router = express.Router();
const User = require("../models/POJO/user_POJO.js");

const user_register_form = (req,res,next)=>{
    
    const created_user = new User();

    created_user.first_name = req.body.first_name;
    created_user.last_name = req.body.last_name;
    created_user.username = req.body.username;
    created_user.email = req.body.email;
    created_user.password = req.body.password;
    created_user.gender = req.body.gender;

    req.created_user = created_user;

    is_error = false;

    const errors =
    {
        first_name : null,
        last_name : null,
        username : null,
        email : null,
        password : null,
        cpassword : null,
        gender : null,
    }

    if(created_user.first_name == "")
    {
        is_error = true;
        errors.first_name = "You must enter a first name!";
    };

    if(created_user.last_name == "")
    {
        is_error = true;
        errors.last_name = "You must enter a last name!";
    };

    if(created_user.username == "")
    {
        is_error = true;
        errors.username = "You must enter a username!";
    };

    if(created_user.email == "")
    {
        is_error = true;
        errors.emai = "You must enter an email!";
    };

    if(created_user.password == "")
    {
        is_error = true;
        errors.password = "You must enter a password!"
    };

    /*if(created_user.cpassword != created_user.password)
    {
        is_error = true;
        errors.password = "Passwords must match!"
    };*/

    if(created_user.gender == null)
    {
        is_error = true;
    };

    if(is_error)
    {
        res.render("admin/register",{

            title : "Register User Page",
            errors,
        });
    }

    else
    {
        next();
    }
    
};

module.exports = user_register_form;