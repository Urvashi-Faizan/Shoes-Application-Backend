
const mongoose = require("mongoose")
const CategorySchma = new mongoose.Schema({
    catname:{
        required:true,
        type:String
    },
    catimage:{
        required:true,
        type:String
    },
   
})
module.exports=mongoose.model("Categorycollection",CategorySchma)