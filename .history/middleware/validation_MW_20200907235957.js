const express = require("express");
const router = express.Router();
//const form = require("../models/POJO.js")

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

    if(form.first_name == "")
    {
        is_error = true;
        errors.first_name = "You must enter a first name!";
    };

    if(form.last_name == "")
    {
        is_error = true;
        errors.last_name = "You must enter a last name!";
    };

    if(form.username == "")
    {
        is_error = true;
        errors.username = "You must enter a username!";
    };

    if(form.email == "")
    {
        is_error = true;
        errors.emai = "You must enter an email!";
    };

    if(form.password == "")
    {
        is_error = true;
        errors.password = "You must enter a password!"
    };

    if(form.cpassword != form.password)
    {
        is_error = true;
        errors.password = "Passwords must match!"
    };

    if(form.gender == null)
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
    
}

