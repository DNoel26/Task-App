//permissions to view this page?

exports.is_authorized_admin = (req,res,next)=>{

    if(req.session.session_user != null)
    {
        if(req.session.session_user.role == "admin")
        {
            next();
        }

        else if(req.session.session_user.role == "user")
        {
            authorization_key = 1;
            next();
        }        
    }
    
    else //if(req.session.session_user.role == null)
    {
        res.redirect("/");
    }
}

module.exports = is_authorized;