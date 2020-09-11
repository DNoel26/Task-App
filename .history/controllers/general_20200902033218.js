const express = require("express");
const router = express.Router();

app.get("/",(req,res)=>{

    const person = {

        first_name : "Darnell",
        last_name : "Noel"
    };

    const age = 30;
    const movies = ["The Matrix","Titanic","Speed"];

    res.render("general/home",{

        person,
        age,
        movies,
        title : "Home Page"
    })
})

/*router.get("/",(req,res)=>{

    res.render("general/home",{

        title : "Home Page"
    })
});

router.post("/",(req,res)=>{

    res.send("Login form submitted");
});*/

/*router.post("/user/user_profile",(req,res)=>{

    res.send("Login form submitted");
});

router.get("/contact-us",(req,res)=>{

    res.render("general/contact_us",{

        title : "Contact Us"
    })
}); */

module.exports = router;