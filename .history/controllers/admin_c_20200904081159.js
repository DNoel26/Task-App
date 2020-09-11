const express = require('express');
const router = express.Router();

router.get("/register",(req,res)=>{

    res.render("admin/register")
})

router.get("/admin/dashboard",(req,res)=>{
    
})

module.exports = router;