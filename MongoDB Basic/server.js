const dotenv=require('dotenv').config()
const express =require('express');
const app=express();
const colors=require('colors')
const connectMongoDB=require('./config/db')

//Connect mongo DB init
connectMongoDB();
  
//Environment Variables init
const PORT =process.env.SERVER_PORT;

//server body init
app.use(express.json())
app.use(express.urlencoded({extended :false}))
//students route Use
app.use('/api/students',require('./routes/students'))

//admin route use
app.use('/api/admin',require('./routes/admin'))

//add express express listener with port
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`);
})