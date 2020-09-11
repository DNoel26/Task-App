const express = require("express");
const router = express.Router();

const {login_}

router.get("/login",(req,res)=>{

    res.render("general/home",{

        title : "Home Page Controller"
    })
});

router.get("/logout",(req,res)=>{

    res.render("general/home",{

        title : "Home Page Controller"
    })
});

module.exports = router;