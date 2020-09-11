//permissions to view this page?

const is_authorized = (req,res,next)=>{

    if(req.session.session_user.role == "user")
    {
        next()
    }

    if(req.session.session_user.role == "admin")
    {
        next()
    }
}