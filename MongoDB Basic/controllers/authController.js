//admin login system

const Admin=require('../models/adminModel')

const bcrypt=require('bcryptjs')
const adminLogin= async(req,res)=>{
    const {email,password}=req.body;

    //const login_data=await Admin.find({email}) or Admin.find({email:email})
    //find give me array and findOne give me object

    //check users by email
    const login_data=await Admin.findOne({email : email})

    //now validate email
    if(!login_data){
        res.status(400).json({
            message : "Email not found"
        })
    }
    else{

        if(await bcrypt.compare(password,login_data.password)){
            res.status(200).json({
                message : "admin used login successful"
            })
        }
        else{
            res.status(200).json({
                message : "wrong Password"
            })
        }
    }   
}

//auth exports
module.exports={
    adminLogin
}