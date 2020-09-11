const express = require('express');
const router = express.Router();

router.get("/register",(req,res)=>{

    res.render("admin/register",{

        title : ""
    });
})

router.get("/admin/dashboard",(req,res)=>{

    res.render("admin/admin_dashboard",{

        title : "Admin Dashboard Controller"
    });
})

module.exports = router;