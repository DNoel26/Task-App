const express = require("express");
const router = express.Router();

router.get("/user/profile",(req,res)=>{

    res.render("user/user_profile",{

        title : "User Profile Controller"
    })
});

router.get("/user/upload-photo",(req,res)=>{

    res.render("user/change_password",{

        title : "User Profile Controller"
    })
});

module.exports = router;