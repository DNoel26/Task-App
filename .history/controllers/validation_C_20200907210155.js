const express = require("express");
const router = express.Router();
const created_user = require("../models/POJO.js")

is_error = false;

errors =
{
    first_name : null,
    last_name : null,
    username : null,
    email : null,
    password : null,
    gender : null
}

if(created_user.first_name == "")
{
    is_error = true;
    errors.first_name = "You must enter a first name!"
};

if(created_user.last_name == "")
{
    is_error = true;
    errors.last_name = "You must enter a last name!"
};

if(created_user.username == "")
{
    is_error = true;
    errors.username = "You must enter a username!"
};

if(created_user.email == "")
{
    is_error = true;
    errors.first_name = "You must enter a first name!"
};

if(created_user.password == "")
{
    is_error = true;
};

if(created_user.gender == null)
{
    is_error = true;
};