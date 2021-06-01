const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect('mongodb+srv://aman123:ThxfBCxQYlBwltxd@understanding450.hts1v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'||process.env.MONGODB_URI || 'mongodb://localhost/for_comment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result)=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log('no db connection')
}) 
 

