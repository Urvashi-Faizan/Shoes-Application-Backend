
const mongoose = require("mongoose")
const UserSchma = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String,
        trim:true
    }
    ,isVerified : {
        type : Boolean,
        default : false
    }
})
module.exports=mongoose.model("usercollection",UserSchma)