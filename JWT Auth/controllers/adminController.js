//get all admin
const bcrypt= require('bcryptjs')
const Admin=require('../models/adminModel')


const getAllAdmin=async (req,res)=>{

    let data= await Admin.find()
    res.status(200).json(data)
}


const singleAdmin=async (req,res)=>{

    let data= await Admin.findById(req.params.id)
    res.status(200).json(data)
}
const createAdmin= async (req,res)=>{

    const {name,email,cell,location,password,skill,username}=req.body;
    // await Admin.create(req.body);
    //for password
    //npm install bcryptjs
     //Hash password
     const salt = await bcrypt.genSalt(10)
     const hashPassword=await bcrypt.hash(password, salt)

     if(!name || !email || !cell || !password || !username){
        res.status(200).json({
            message : " all Field are required"
        })
     }
     else{
        await Admin.create({
            ...req.body,
            password : hashPassword
        });
        res.status(200).json({
            message : 'create admins'
        })
     }

  
}
const updateAdmin=(req,res)=>{
    res.status(200).json({
        message : 'update admins'
    })
}
const deleteAdmin= async (req,res)=>{
    const delete_data=Admin.findById(req.params.id)
    if(!delete_data){
        res.status(200).json({
            message : 'delete data not found admins'
        })
    }

    else{
        const data =await Admin.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message : ` delete ${data.name} data`
    })
    }
}

//admin profile

const adminProfile=(req,res)=>{
    res.send('this is admin profile')
}
const adminHome=(req,res)=>{
    res.send('this is Home profile')
}


module.exports={
    getAllAdmin,
    singleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    adminHome,
    adminProfile
}