const express = require('express');
const router = express.Router();

router.get("/admin/register",(req,res)=>{

    res.render("admin/register",{

        title : "Register Controller"
    });
})



router.get("/admin/dashboard",(req,res)=>{

    res.render("admin/admin_dashboard",{

        title : "Admin Dashboard Controller"
    });
})

module.exports = router;