//permissions to view this page?

const is_authorized = (req,res,next)=>{

    let authorization_key = 0;
    req.session.auth_key = authorization_key;

    if(req.session.session_user.role == "user")
    {
        authorization_key = 2;
        next();
    }

    else if(req.session.session_user.role == "admin")
    {
        authorization_key = 1;
        next();
    }

    else
}

module.exports = is_authorized;