const express = require("express");
const router = express.Router();
const User = require("../models/POJO/user_POJO.js");
const user_model = require("../models/models/user_MDL.js");
const bcryptjs = require("bcryptjs");

exports.user_register_form = (req,res,next)=>{
    
    const created_user = new User();

    created_user.first_name = req.body.first_name;
    created_user.last_name = req.body.last_name;
    created_user.username = req.body.username;
    created_user.email = req.body.email;
    created_user.password = req.body.password;
    created_user.gender = req.body.gender;

    req.created_user = created_user;

    let is_error = false;

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
        console.log(`${req.created_user.password} password BEFORE SALTING - validation_MW.js`)

        bcryptjs.genSalt(10)
        .then((salt)=>{

            return bcryptjs.hash(req.created_user.password,salt)
        })
        .then((encrypt_password)=>{

            req.created_user.password = encrypt_password;

            console.log(`${req.created_user.password} password AFTER SALTING - validation_MW.js`)

            next();
        })
        .catch(err=>console.log(`Error : ${err}`));      
        
        //next();
    }
    
};

exports.login_form = (req,res,next)=>{
    
    const login_user = new User();

    login_user.username = req.body.username_email;
    login_user.email = req.body.username_email;
    login_user.password = req.body.password;

    req.login_user = login_user;

    let is_error = false;

    const errors =
    {
        username_email : null,
        password : null,
    }
    /*
    if(login_user.username == "")
    {
        is_error = true;
        errors.username = "You must enter a username!";
    };*/

    if(login_user.username == "" || login_user.email == "")
    {
        is_error = true;
        errors.username_email = "You must enter a username or email!";
    };

    if(login_user.password == "")
    {
        is_error = true;
        errors.password = "You must enter a password!";
    };

    if(!is_error || ((login_user.username != "" || login_user.email != "") && login_user.password == ""))
    {
        user_model.get_a_user_by_email(login_user.email, login_user.username)
        .then((selected_user)=>{
            
            console.log(`SELECTED USER IS ${selected_user} - validation_MW.js`)
            console.log(selected_user)

            if(selected_user != null)
            {
                bcryptjs.compare(login_user.password,selected_user.password)
                .then((valid)=>{

                    if(valid)
                    {
                        req.selected_user = selected_user; //assign the selected user to the middleware req object 
                        next();
                    }

                    else
                    {
                        errors.password = "Sorry! That username/email and password combination is incorrect!"
                        
                        res.render("general/home",{

                            title : "Login Page",
                            errors
                        });
                    }
                })
                .catch(err=>console.log(`Error : ${err}`));
            }

            else //(selected_user.username == null || selected_user.email == null)
            {
                errors.username_email = "Sorry! That username or email does not exist!"
                errors.password = "";
                
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
        res.render("general/home",{

            title : "Login Page",
            errors
        });
    }
    
};

exports.upload_photo_form = (req,res,next)=>{
    
    const created_user = new User();

    created_user.first_name = req.body.first_name;
    created_user.last_name = req.body.last_name;
    created_user.username = req.body.username;
    created_user.email = req.body.email;
    created_user.password = req.body.password;
    created_user.gender = req.body.gender;

    req.created_user = created_user;

    let is_error = false;

    let errors = null;

    if(req.files == null)
    {
        is_error = true;
        errors = "You must select a file to upload!";
    }

    else if(!req.files.photo.mimetype.includes("image"))
    {
        is_error = true;
        errors = "You must upload an image only!";
    }

    if(is_error)
    {
        res.render("user/upload_photo",{

            title : "Upload Photo Page",
            errors
        });
    }

    else
    {
        console.log(`${req.files.photo} Photo Upload Successful - validation_MW.js`);
        console.log(req.files.photo);

        next();
    }
    
};

exports.user_add_task_form = (req,res,next)=>{
    
    const new_task = new Task
    new_task.title = req.body.title;
    new_task.description = req.body.description;
    new_task.user_id = req.session.session_user.id;

    req.created_user = created_user;

    let is_error = false;

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
        console.log(`${req.created_user.password} password BEFORE SALTING - validation_MW.js`)

        bcryptjs.genSalt(10)
        .then((salt)=>{

            return bcryptjs.hash(req.created_user.password,salt)
        })
        .then((encrypt_password)=>{

            req.created_user.password = encrypt_password;

            console.log(`${req.created_user.password} password AFTER SALTING - validation_MW.js`)

            next();
        })
        .catch(err=>console.log(`Error : ${err}`));      
        
        //next();
    }
    
};
//exports.object - multiple exports
