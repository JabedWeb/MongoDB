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

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)
    console.log(hashPassword);

    const {name,email,cell,location,password,skill}=req.body;

    // await Admin.create(req.body);
    //for password
    //npm install bcryptjs

    
    await Admin.create({
        ...req.body,
        password : password
    });
    res.status(200).json({
        message : 'create admins'
    })
}
const updateAdmin=(req,res)=>{
    res.status(200).json({
        message : 'update admins'
    })
}
const deleteAdmin=(req,res)=>{
    res.status(200).json({
        message : 'delete admins'
    })
}

module.exports={
    getAllAdmin,
    singleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}