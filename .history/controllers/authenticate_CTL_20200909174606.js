const express = require("express");
const router = express.Router();

const {login_form} = require("../middleware/validation_MW.js")

router.post("/login",login_form,(req,res)=>{
    
    console.log(`Login as ${req.selected_user.first_name} Successful - authenticate_CTL.js`);

    req.ses
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