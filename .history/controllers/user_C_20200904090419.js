const express = require("express");
const router = express.Router();

router.get("/user/profile",(req,res)=>{

    res.render("user/user_profile",{

        title : "Home Page Controller"
    })
});


module.exports = router;