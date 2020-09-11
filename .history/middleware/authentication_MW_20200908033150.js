//permission to login 

const bcryptjs = require("bcryptjs");

bcrypt.genSalt(10)
.then((salt)=>{

    return bcryptjs.hash()
})