const express = require("express");
const router = express.Router();
//const form_user = require("../models/POJO.js")

const user_register_form = (req,res,next)=>{
 
    is_error = false;

    errors =
    {
        first_name : null,
        last_name : null,
        username : null,
        email : null,
        password : null,
        cpassword : null,
        gender : null,
    }

    if(form_user.first_name == "")
    {
        is_error = true;
        errors.first_name = "You must enter a first name!";
    };

    if(form_user.last_name == "")
    {
        is_error = true;
        errors.last_name = "You must enter a last name!";
    };

    if(form_user.username == "")
    {
        is_error = true;
        errors.username = "You must enter a username!";
    };

    if(form_user.email == "")
    {
        is_error = true;
        errors.emai = "You must enter an email!";
    };

    if(form_user.password == "")
    {
        is_error = true;
        errors.password = "You must enter a password!"
    };

    if(form_user.cpassword != form_user.password)
    {
        is_error = true;
        errors.password = "Passwords must match!"
    };

    if(form_user.gender == null)
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

