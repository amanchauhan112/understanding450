const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

// require('dotenv');
// const path = require('path');

const cors=require('cors');
const PORT = "https://understanding450.herokuapp.com/" || process.env.PORT || 8080; // Step 1

app.get('/',(req,res)=>{
      res.send('hello world' );
});

const dotenv=require('dotenv')
const passport=require('passport')
const session=require('express-session')
const MongoStore=require('connect-mongo');
const connection=require('./config/conn')

// require('./db/connection');
const routes = require('./router/routes');

//---------------------------
//Load config
dotenv.config({path:'./config/.env'})

//Passport Config
require('./config/passport')(passport)

connection()

app.use(morgan('tiny'))

//Handlebars
// app.engine('.hbs',exphbs({defaultLayout:'main',extname:'.hbs'}));
// app.set('view engine','.hbs');

//Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
    store:new MongoStore({mongoUrl:'mongodb+srv://aman123:ThxfBCxQYlBwltxd@understanding450.hts1v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'||process.env.MONGO_URI})
  }))

  // app.use(function (req, res, next) {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  //   res.setHeader('Access-Control-Allow-Credentials', true);
  //   next();
  //   });

app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/',require('./router/routes'))
app.use('/auth',require('./router/auth'))
//----------------------------------

// Step 2


// // Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors());
// HTTP request logger
// app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// app.use((req,res)=>{
//     res.status(404).send('404 error')
// })