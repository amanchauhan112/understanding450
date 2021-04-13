const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// const path = require('path');
const cors=require('cors');
const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./router/routes');

const MONGODB_URI='mongodb+srv://aman123:aman123@mern-practice.zreod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Step 2
mongoose.connect(MONGODB_URI || 'mongodb://localhost/for_comment', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database is connected!!!!');
});

// // Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors());
// // HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// app.use((req,res)=>{
//     res.status(404).send('404 error')
// })