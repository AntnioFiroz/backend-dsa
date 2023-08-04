const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({

    name: {
        type: String,
    },
    email:{
        type:Number,
    },
    password: {
        type:String,
    },
    timestamps: {
        type:Date
    }
})
 
module.exports = User = mongoose.model('User', userSchema);