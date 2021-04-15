const mongoose = require("mongoose");

//Schema

const Schema=mongoose.Schema;

const Comment = new Schema ({
    comment : 
    {
        String,
        // require: true,
        pageId:'',
    }
});

const CommentModel = new mongoose.model('CommentModel',Comment);

module.exports = CommentModel;
