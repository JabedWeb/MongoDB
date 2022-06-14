const authCheck=(req,res,next)=>{

    if(req.headers.authorization){
        const token=req.headers.authorization.split(' ')[1];
        next()

    }
    else{
        res.json({
            message : "Token not found"
        })
    }
}

module.exports={
    authCheck
}