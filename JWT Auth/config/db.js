const mongoose=require('mongoose');

//set mongo DB connection
const connectMongoDB=async()=>{
    try{
        let connect= await mongoose.connect(process.env.MONGO_DB);
        console.log(`MongoDB connection set successfully`.yellow);
    }catch (error){
        console.log(`${error}`.red);
    }
}

//export Connection
module.exports=connectMongoDB