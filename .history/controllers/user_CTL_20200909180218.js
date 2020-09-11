const express = require("express");
const router = express.Router();

router.post("/user-profile",(req,res)=>{

    res.render("user/user_profile",{

        title : "User Profile Controller"
    })
});

router.post("/user-profile",(req,res)=>{

    res.render("user/user_profile",{

        title : "User Profile Controller"
    })
});

router.get("/change-password",(req,res)=>{

    res.render("user/change_password",{

        title : "User Change Password Controller"
    })
});

router.get("/upload-photo",(req,res)=>{

    res.render("user/upload_photo",{

        title : "User Upload Photo Controller"
    })
});

module.exports = router;