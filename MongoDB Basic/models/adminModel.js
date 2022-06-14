const mongoose=require('mongoose');

//Basic admin model schema========
//   const adminModel=mongoose.Schema({
//     name : String,
//     email : String,
//     cell : String,
//     username : String,
//     location : String,
//     skill : String,
//     password : String
// })


//Advance admin model schema
const adminModel=mongoose.Schema({
    name : {
        type : String,
        required: [true,"Name Field is required"]
    },
    email : {
        type : String,
        required : [true,"email filed is required"],
        unique : true
    },
    cell : {
        type : String,
        required : [true,"cell filed is required"],
        unique : true
    },
    username : {
        type : String,
        required : [true,"username filed is required"],
        unique : true,
        lowercase : true,
        minLength : 5,
        maxLength : 10
    },
    location : {
        type : String,
        required : [true,"Location filed is required"],
        default : "Dhaka"

    },
    skill : {
        type : String,
        required : [true,"skill filed is required"],
        default : "Mern Stack"
    },
    password : String
},{
    timestamps : true
})


//export our model
module.exports=mongoose.model('Admin',adminModel)