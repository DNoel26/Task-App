
const method_handler = (req,res,next) =>
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