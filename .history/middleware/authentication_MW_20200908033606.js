//permission to login 

const bcryptjs = require("bcryptjs");

bcryptjs.genSalt(10)
.then((salt)=>{

    return bcryptjs.hash(re)
})
.then()
.catch(err=>console.log(`Error : ${err}`));