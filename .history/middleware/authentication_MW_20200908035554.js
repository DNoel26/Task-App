//permission to login 

const bcryptjs = require("bcryptjs");


const bcrypt.genSalt(10)
.then((salt)=>{

    return bcryptjs.hash(req.created_user.password,salt)
})
.then((encrypt_password)=>{


})
.catch(err=>console.log(`Error : ${err}`));