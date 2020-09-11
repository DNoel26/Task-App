
const express = require('express');
const exphbs  = require('express-handlebars');
const body_parser = require('body-parser');
require('dotenv').config({path: 'config/keys.env'});
const session = require("express-session");

//Controllers
const general_controller = require("./controllers/general_CTL.js");
const admin_controller = require("./controllers/admin_CTL.js");
const user_controller = require("./controllers/user_CTL.js");
const task_controller = require("./controllers/task_CTL.js");
const authenticate_controller = require("./controllers/authenticate_CTL.js");
const method_handler = require("./middleware/method_handler_MW.js");
//const authorize = require("./middleware/authorization_MW.js");


const mysql_config = require("./config/MySQLDAO.js");
const mySQL_DB = require('./config/MySQLDAO.js');

const app = express();
  
const helper = exphbs.create({

    helpers : {

        if_equal(a,b,options)
        {
            if(a == b)
            {
                return options.fn(this);
            }

            else
            {
                return options.inverse(this);
            }
        }
    }
})

//All app methods below
app.engine('handlebars', helper.engine);
app.set('view engine', 'handlebars');

//session 
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}))

//All app.use below
app.use(express.static('public'));
app.use(body_parser.urlencoded({extended: false}))

app.use((req,res,next)=>{

    res.locals.session_user = req.session.session_user;
    next();
})

app.use(method_handler);
app.use("/",general_controller);
app.use("/admin",admin_controller);
app.use("/user",user_controller);
app.use("/task",task_controller);
app.use("/authenticate",authenticate_controller);

app.use((req,res,next)=>{

    console.log("Middleware test loaded");
    next();
});

/*app.get("/",(req,res)=>{

    console.log("Home Page loaded");
    res.send("Welcome to the Home Page!");
});

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
});*/

//const PORT = 3000;

app.listen(process.env.PORT,()=>{

    console.log("Web Server is up and running!!!");
    mySQL_DB.init();
});