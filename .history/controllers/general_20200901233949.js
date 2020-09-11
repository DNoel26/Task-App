const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{

    res.render("general/home",{

        title : "Home Page"
    })
});

router.post("/user/user_profile",(req,res)=>{

    res.send("Login form submitted");
});

router.get("/contact-us",(req,res)=>{

    res.render("general/contact_us",{

        title : "Contact Us"
    })
}); 

export 