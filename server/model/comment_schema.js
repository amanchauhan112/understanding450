const mongoose = require("mongoose");
// const {ObjectId}=mongoose.Schema.Types

//Schema

const Schema=mongoose.Schema;

const Comment = new Schema ({
    userID:{
        type: String,
     },
    comment : 
    {
        type:String,
        pageId:'',
    },
    // postedBy:{
    //     type:ObjectId,
    //     ref:"User"
    // }
   

},

    { timestamps: true }
);

const CommentModel = new mongoose.model('CommentModel',Comment);

module.exports = CommentModel;
