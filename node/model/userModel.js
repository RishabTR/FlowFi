const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    balance:{
        type:Number,
        default:1000
    }
    
})


const User = mongoose.model("user",userSchema);
module.exports = User