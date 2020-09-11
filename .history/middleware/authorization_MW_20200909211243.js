//permissions to view this page?

const is_authorized = (req,res,next)=>{

    let authorization_key = 0;
    req.session.

    if(req.session.session_user.role == "user")
    {
        authorization_key = 2;
        next();
    }

    if(req.session.session_user.role == "admin")
    {
        authorization_key = 1;
        next();
    }
}