const mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema.Types

//Schema

const Schema=mongoose.Schema;

const Comment = new Schema ({
    comment : 
    {
        type:String,
    
        pageId:'',
    },
    name:{
        type:String,
        default:'sdsdd',
      
    },
    
    postedBy:{
        type:ObjectId,
        ref:"RegisterModel"
    }

   

},


    { timestamps: true }
);

const CommentModel = new mongoose.model('CommentModel',Comment);

module.exports = CommentModel;
