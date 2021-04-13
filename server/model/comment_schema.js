const mongoose = require("mongoose");

//Schema

const Schema=mongoose.Schema;

const Comment = new Schema ({
    comment : 
    // {
        String,
        // require: true,
    // }
});

const CommentModel = new mongoose.model('CommentModel',Comment);

module.exports = CommentModel;
