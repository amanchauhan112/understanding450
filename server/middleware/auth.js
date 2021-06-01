//For normal login/register
const mongoose = require("mongoose");
const jwt=require('jsonwebtoken');

const RegisterModel=require('../model/register_schema')


module.exports=(req,res,next)=>{
const {authorization}=req.headers
//authorization===Bearer <token>

if(!authorization){
    return res.status(401).json({error:"You must login first"})
}

const token=authorization.replace("Bearer ","")
jwt.verify(token,"Bearer "||process.env.SECRET_KEY,(err,payload)=>{

    if(err){
        return res.status(401).json({error:"You must login first"})

    }
    const {_id}=payload

    RegisterModel.findById(_id).then(userdata=>{
        req.user=userdata;
        next();
    });

    
})

}