
const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        required:true,
        type:String

    },
    image:{
        required:true,
        type:File
    },
    password:{
        required:true,
        type:Number,
        trim: true
        
    }
});
module.exports= mongoose.model("user",UserSchema)