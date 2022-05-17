
const mongoose = require("mongoose")
const CartSchma = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    },
   
})
module.exports=mongoose.model("Categorycollection",CartSchma)