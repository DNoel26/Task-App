const express = require("express");
const router = express.Router();

const {login_form} = require("../middleware/validation_MW.js")

router.post("/login",login_form,(req,res)=>{
    
    console.log(`Login as ${req.selected_user.first_name} Successful - authenticate_CTL.js`);
    console.log(req.selected_user)

    req.session.session_user = req.selected_user;

    console.log(`Session created for ${req.session.session_user.first_name} ${req.session.session_user.last_name} Successful - authenticate_CTL.js`);

    if(req.session.session_user.role == "admin")
    {
        res.redirect("/admin/dashboard");    
    }

    else if(req.session.session_user.role == "user")
    {
        res.redirect("/user/")
    }
    
});

router.get("/logout",(req,res)=>{

    res.render("general/home",{

        title : "Home Page Controller"
    })
});

module.exports = router;