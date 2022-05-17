
const mongoose = require("mongoose")
const AdminSchma = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    adminimage:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String,
        trim:true
    }
   
});
module.exports=mongoose.model("Admincollection",AdminSchma)