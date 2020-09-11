//permission to login 

const bcryptjs = require("bcryptjs");

exports.encrypt = (req,res,next)=>{

    console.log(`${req.created_user.password} password BEFORE SALTING`)

    bcryptjs.genSalt(10)
    .then((salt)=>{

        return bcryptjs.hash(req.created_user.password,salt)
    })
    .then((encrypt_password)=>{

        req.created_user.password = encrypt_password;

        console.log(`${req.created_user.password} password AFTER SALTING`)

        next();
    })
    .catch(err=>console.log(`Error : ${err}`));      
}

exports.decrypt = (req,res,pword,next)=>{

    console.log(`${req.created_user.password} password BEFORE UNSALTING`)

    bcryptjs.compare(req.body.password,pword)
    .then((valid)=>{

        if(success)
        {

        }
    })
    .catch(err=>console.log(`Error : ${err}`));
}

//module.exports = encrypt;