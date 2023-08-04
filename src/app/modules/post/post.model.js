const mongoose = require('mongoose');
const Schema = mongoose.Schema
const postSchema = new Schema({
    title:{
        type:String,
        
    },
    message:{
        type:String,
        
    },
    creator:{
        type:String,
        
    },
    tags:{
        type:[String],
        
    },
    selectedFile:{
        type:String,
        
    },
    likeCount:{
        type:Number,
        default:0
        
    },
    createdAt:{
        type:Date,
        default: new Date()
        
    },

  
})
 
module.exports= mongoose.model('post', postSchema);