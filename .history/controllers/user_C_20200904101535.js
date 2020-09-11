const express = require("express");
const router = express.Router();

router.get("/user/profile",(req,res)=>{

    res.render("user/user_profile",{

        title : "User Profile Controller"
    })
});

router.get("/user/change-password",(req,res)=>{

    res.render("user/change_password",{

        title : "User Change Password Controller"
    })
});

router.get("/user/upload-photo",(req,res)=>{

    res.render("user/upload-photo",{

        title : "User Change Password Controller"
    })
});

module.exports = router;