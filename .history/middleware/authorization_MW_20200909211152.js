//permissions to view this page?

const is_authorized = (req,res,next)=>{

    let authorization_key = 0;

    if(req.session.session_user.role == "user")
    {
        authorization_key = 
        next()
    }

    if(req.session.session_user.role == "admin")
    {
        
        next()
    }
}