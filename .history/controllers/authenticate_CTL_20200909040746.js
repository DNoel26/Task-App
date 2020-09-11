const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{

    res.render("general/home",{

        title : "Home Page Controller"
    })
});