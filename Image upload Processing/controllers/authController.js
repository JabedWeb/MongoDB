//admin login system

const Admin=require('../models/adminModel')

// to create hash password
const bcrypt=require('bcryptjs')

//to create token
const jwt=require('jsonwebtoken')
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
            //for token
            //npm install jsonwebtoken
            const token=jwt.sign({id :login_data.id },process.env.JWT_SECRET,{
                expiresIn : "1d"
            })


            res.status(200).json({
                id : login_data.id,
                name : login_data.name,
                email : login_data.email,
                cell : login_data.cell,
                token :token
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