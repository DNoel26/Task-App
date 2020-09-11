const express = require("express");
const router = express.Router();
const User = require("../models/POJO/user_POJO.js");
const user_model = require("../models/models/user_MDL.js")

exports.user_register_form = (req,res,next)=>{
    
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
        confirm_password : null,
        gender : null
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
        errors.email = "You must enter an email!";
    };

    if(created_user.password == "")
    {
        is_error = true;
        errors.password = "You must enter a password!";
    };

    if(req.body.confirm_password !== created_user.password)
    {
        is_error = true;
        errors.confirm_password = "Passwords must match!";
    };

    if(created_user.gender == null)
    {
        is_error = true;
        errors.gender = "You must select a gender!";
    };

    if(is_error)
    {
        res.render("admin/register",{

            title : "Register User Page",
            errors,
            created_user
        });
    }

    else
    {
        next();
    }
    
};

exports.login_form = (req,res,next)=>{
    
    const login_user = new User();

    login_user.username = req.body.username;
    login_user.email = req.body.email;
    login_user.password = req.body.password;

    req.login_user = login_user;

    is_error = false;

    const errors =
    {
        username : null,
        email : null,
        password : null,
    }
    /*
    if(login_user.username == "")
    {
        is_error = true;
        errors.username = "You must enter a username!";
    };*/

    if(login_user.email == "")
    {
        is_error = true;
        errors.email = "You must enter a username or email!";
    };

    if(login_user.password == "")
    {
        is_error = true;
        errors.password = "You must enter a password!";
    };

    if(!is_error)
    {
        user_model.get_a_user_by_email(login_user.email, login_user.username)
        .then((selected_user)=>{

            if(selected_user != null)
            {

            }

            else if(selected_user.username == null || selected_user.email == null)
            {
                errors.email = "Sorry! That username or email does not exist!"
                
                res.render("general/home",{

                    title : "Login Page",
                    errors
                });
            }

            else
            {
                errors.password = "Sorry! That username/ email  does not exist!"
                
                res.render("general/home",{

                    title : "Login Page",
                    errors
                });
            }
        })
        /*
        res.render("user/user_profile",{

            title : "Register User Page",
            errors,
            created_user
        });*/
    }

    else
    {
        next();
    }
    
};

//exports.object - multiple exports