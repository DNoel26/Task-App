//permissions to view this page?

exports.is_authorized_admin = (req,res,next)=>{

    if(req.session.session_user != null)
    {
        if(req.session.session_user.role == "admin")
        {
            next();
        }

        else
        {
            res.redirect("/");
        }        
    }
    
    else //if(req.session.session_user.role == null)
    {
        res.redirect("/");
    }
};

exports.is_authorized_admin = (req,res,next)=>{

    if(req.session.session_user != null)
    {
        if(req.session.session_user.role == "admin")
        {
            next();
        }

        else
        {
            res.redirect("/");
        }        
    }
    
    else //if(req.session.session_user.role == null)
    {
        res.redirect("/");
    }
}
