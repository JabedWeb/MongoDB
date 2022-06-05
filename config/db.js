const mongoose=require('mongoose');

//set mongo DB connection
const connectMongoDB=async()=>{
    try{
        let connect= await mongoose.connect('mongodb+srv://jabed:jabed%40880@ourtestingcluster.zwagu05.mongodb.net/first_express?retryWrites=true&w=majority');
        console.log(`MongoDB connection set successfully`.yellow);
    }catch (error){
        console.log(`${error}`.red);
    }
}

//export Connection
module.exports=connectMongoDB