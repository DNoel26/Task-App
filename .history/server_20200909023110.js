
const express = require('express');
const exphbs  = require('express-handlebars');
const body_parser = require('body-parser');
require('dotenv').config({path: 'config/keys.env'});

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

//Controllers
const general_controller = require("./controllers/general_CTL.js");
const admin_controller = require("./controllers/admin_CTL.js");
const user_controller = require("./controllers/user_CTL.js");
const task_controller = require("./controllers/task_CTL.js");

const mysql_config = require("./config/MySQLDAO.js");
const mySQL_DB = require('./config/MySQLDAO.js');

//All app.use below
app.use(express.static('public'));
app.use(body_parser.urlencoded({extended: false}))

app.use
app.use("/",general_controller);
app.use("/",admin_controller);
app.use("/",user_controller);
app.use("/",task_controller);

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