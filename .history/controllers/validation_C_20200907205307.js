const express = require("express");
const router = express.Router();
const created_user = require("../models/POJO.js")

is_error = false;

errors =
{
    
}

if(created_user.first_name == "")
{
    is_error = true;
};

if(created_user.last_name == "")
{
    is_error = true;
};

if(created_user.username == "")
{
    is_error = true;
};

if(created_user.email == "")
{
    is_error = true;
};

if(created_user.password == "")
{
    is_error = true;
};

if(created_user.gender == "")
{
    is_error = true;
};