const mongoose = require("mongoose");
const QuerySchema = new mongoose.Schema({
    userid:{
        required:true,
        type:String
    },
    querytext:{
        required:true,
        type:String  
    },
    queryStatus:{
        required:true,
        type:String
    }
});
module.exports = mongoose.model('query',QuerySchema);