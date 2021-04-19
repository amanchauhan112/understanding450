const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv');
// const path = require('path');
const cors=require('cors');
const app = express();
const PORT = process.env.PORT || 8080; // Step 1

require('./db/connection');
const routes = require('./router/routes');



// Step 2


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