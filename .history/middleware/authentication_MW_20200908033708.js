//permission to login 

const bcryptjs = require("bcryptjs");


bcryptjs.genSalt(10)
.then((salt)=>{

    return bcryptjs.hash(req.created_user.password)
})
.then()
.catch(err=>console.log(`Error : ${err}`));