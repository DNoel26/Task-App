
const express = require("express");
const exphbs  = require('express-handlebars');
const body_parser = require("body-parser");
require("dotenv").config({path: "config.keys.env"});
const general_controller = require("./controllers/general.js");
//const router = require("./controllers/general.js");

const app = express();

app.use(express.static('public'));
app.use(body_parser.urlencoded({extended: false}))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//app.use("/",general_controller);

app.use((req,res,next)=>{

    console.log("Middleware test loaded");
    next();
});

app.get("/",(req,res)=>{

    console.log("Home Page loaded");
    res.send("Welcome to the Home Page!");
});

/*app.get("/",(req,res)=>{

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
});*/

//const PORT = 3000;

app.listen(process.env.PORT,()=>{

    console.log("Web Server is up and running!!!");
});