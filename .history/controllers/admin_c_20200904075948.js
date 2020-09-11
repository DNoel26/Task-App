const express = require('express');
const router = express.Router();

router.get("/admin/register",(req,res)=>{

    res.render("admin/register")
})

module.exports = router;