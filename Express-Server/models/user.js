const mongoose = require('mongoose')

const Schema= mongoose.Schema

const userSchema = new Schema({
        //  id: Object,
        userName: {type:String},
        phoneNumber: {type:Number},
        password:{type:String}
    
    
    
   
})

module.exports = mongoose.model('user',userSchema,'users')