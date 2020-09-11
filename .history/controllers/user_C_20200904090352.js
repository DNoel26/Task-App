const express = require("express");
const router = express.Router();

//router.get("/user/")

router.get("/",(req,res)=>{

    res.render("general/home",{

        title : "Home Page Controller"
    })
});


module.exports = router;