//permission to login 

const bcryptjs = require("bcryptjs");

bcryptjs.genSalt(10)
.then((salt)=>{

    return bcryptjs.hash()
})
.then()
.catch(err=>console.log(`Error : ${err}`))