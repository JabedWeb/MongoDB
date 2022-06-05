const mongoose=require('mongoose');

const studentModel=mongoose.Schema({
    name : String,
    age : Number,
    skill : String
});

module.exports=mongoose.model('Student',studentModel)