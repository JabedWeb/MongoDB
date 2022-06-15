const dotenv=require('dotenv').config()
const express =require('express');
const app=express();
const colors=require('colors')
const connectMongoDB=require('./config/db')

const path=require('path')

//for image uploaded
const multer=require('multer')

const storage= multer.diskStorage({
    destination :(req,file,cb)=>{

        cb(null,'./media/user')
    },
    filename: (req,file,cb)=>{
        let extname=path.extname(file.originalname);

        let fileName=Date.now()+'_'+ Math.round(Math.random()*1000000)+'.'+ extname;

        cb(null,fileName)
    }
})
const upload=multer({
    storage : storage 
})

//Connect mongo DB init
connectMongoDB();
  
//Environment Variables init
const PORT =process.env.SERVER_PORT;

//server body init
app.use(express.json())
app.use(express.urlencoded({extended :false}))



//Photo Upload

app.post('/upload',upload.array('photo') ,(req,res) =>{
    res.send("File send uploaded")
})




//students route Use
app.use('/api/students',require('./routes/students'))

//admin route use
app.use('/api/admin',require('./routes/admin'))

//add express express listener with port
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`);
})