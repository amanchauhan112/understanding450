const mongoose = require("mongoose");
const jwt=require('jsonwebtoken');

//Schema

const Schema=mongoose.Schema;

const Register = new Schema ({
    name: {
        type: String,
        requied: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      password2: {
        type: String,
        required: true,
      },
      tokens:[{
        token:{
          type: String,
        }
    
      }],},

    { timestamps: true }
);


Register.methods.generateAuthToken =async function(){
    try{
      const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
      this.tokens= this.tokens.concat({token:token})
      await this.save();
      return token;
  }catch(error){
      console.log("genAuthToken "+error);
  }
  }
  

const RegisterModel = new mongoose.model('RegisterModel',Register);

module.exports = RegisterModel;
