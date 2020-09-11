const express = require("express");
const router = express.Router();

router.get("/user/profile",(req,res)=>{

    res.render("general/home",{

        title : "Home Page Controller"
    })
});


module.exports = router;