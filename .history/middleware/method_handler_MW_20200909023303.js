
const method_handler 
{
    if(req.query.method == "delete")
    {
        req.method = "DELETE";
    }

    if(req.query.method == "put")
    {
        req.method = "PUT";
    }
}

module.exports = method_handler;