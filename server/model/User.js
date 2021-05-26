const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');

const User_Schema=new mongoose.Schema({

googleId:{
    type:String,
    required:true,
},
displayName:{
    type:String,
    required:true
},
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
image:{
    type:String,
},
createdAt:{
    type:String,
    default:Date.now
},
// tokens:[{
//     token:{
//       type: String,
//     }

//   }]
})


// User_Schema.methods.generateAuthToken =async function(){
//     try{
//       const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
//       this.tokens= this.tokens.concat({token:token})
//       await this.save();
//       return token;
//   }catch(error){

//       console.log("genAuthToken "+error);
//   }
//   }

module.exports=mongoose.model('User',User_Schema)
