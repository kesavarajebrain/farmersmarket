const mongoose = require('mongoose')

const Schema= mongoose.Schema

const userSchema = new Schema({
    id:String,
    userName:String,
    phoneNumber:Number,
    email:String,
    password:String
})

module.exports = mongoose.model('user',userSchema,'users')