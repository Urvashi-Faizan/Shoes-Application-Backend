const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:File
    },
    price:{
        required:true,
        type:Number
    },
    discription:{
        required:true,
        type:String
    },
    quantity:{
        required:true,
        type:Number
    },
    size:{
        required:true,
        type:String
    },
    colour:{
        required:true,
        type:String
    },
    keywords:{
        required:true,
        type:String
    },
    review:{
        required:true,
        type:String
    }
});
module.exports=mongoose.model("productcollection",ProductSchema)