const mongoose = require("mongoose");

//Schema

const Schema=mongoose.Schema;

const Comment = new Schema ({
    comment : 
    {
        type:String,
    
        pageId:'',
    }
   

},

    { timestamps: true }
);

const CommentModel = new mongoose.model('CommentModel',Comment);

module.exports = CommentModel;
