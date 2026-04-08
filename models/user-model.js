const mongoose = require('mongoose') ;

const UserSchema = mongoose.Schema({
     fullname: String,
     email:String,
     password:String,
     contact:Number,
     cart:{
        type:Array,
        default:[]
     },
     orders:{
        type:Array,
        default:[] 
     },
     picture:String, 
})

module.exports = mongoose.model("userModel" , UserSchema)