const express=require('express')
const passport=require('passport')
const User = require('../model/User')
const router=express.Router()

//Auth with Google
router.get('/google',passport.authenticate('google',{scope:['profile']}))

//Google auth callback

router.get(
    '/google/callback',
    passport.authenticate('google',{failureRedirect:'/'}),
        
        (req,res)=>{
            // const email = req.user.googleId;
            // const userExist = await User.findOne({ email: req.user.id });

            // let token = await userExist.generateAuthToken();
            // res.cookie("jwt",token,{
            //   httpOnly:true,
            // });
            res.redirect('/dashboard')
        }
        )





module.exports =router