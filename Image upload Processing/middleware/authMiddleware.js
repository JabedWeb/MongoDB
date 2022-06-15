const jwt=require('jsonwebtoken');
const Admin = require('../models/adminModel');


const authCheck= async (req,res,next)=>{

    if(req.headers.authorization){

        try{
            //get token
            const token=req.headers.authorization.split(' ')[1];
            //verify token
            const {id}=jwt.verify(token , process.env.JWT_SECRET);

            //get login users
            req.user=await Admin.findById(id); 
            next()
        }
        catch(errors){
            console.log(errors);

        }

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