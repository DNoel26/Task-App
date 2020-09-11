//permissions to view this page?
//page protection
exports.is_authenticated = (req,res,next)=>{

    if(req.session.session_user != null)
    {
        if(req.session.session_user.role)
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
    };
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
    };
};

exports.is_authorized_user = (req,res,next)=>{

    if(req.session.session_user != null)
    {
        if(req.session.session_user.role == "user")
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
    };
};
