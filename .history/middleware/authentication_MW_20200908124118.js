//permission to login 

const bcryptjs = require("bcryptjs");

const authenticate = 
{
    validate_login()
    {
        bcryptjs.genSalt(10)
        .then((salt)=>{

            return bcryptjs.hash(req.created_user.password,salt)
        })
        .then((encrypt_password)=>{

            req.user.password = encrypt_password;
        })
        .catch(err=>console.log(`Error : ${err}`));      
    }
}

module.exports = Validate;