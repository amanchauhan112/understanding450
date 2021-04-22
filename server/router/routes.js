const express = require("express");
const router = express.Router();

const CommentModel=require('../model/comment_schema')
const RegisterModel=require('../model/register_schema')

router.get('/',(req,res)=>{
    CommentModel.find({ })
    .then((data)=>{
           res.json(data);
        })
    .catch((error)=>{
        console.log('error:' ,error)
    });

});

router.post('/save',(req,res)=>{
    console.log(req.body);
    const data = req.body;

    const newComment=new CommentModel(data);

    // newComment.save((error)=>{
    //     if(error){
    //         res.status(500).json({msg:'Sorry!Error Occured'});
    //         return;
    //     }
    //     return  res.json({
    //             msg:'Data Saved'
    //         });
        
    // }
    
    // );

    newComment.save()
    .then((result)=>
    {
        console.log('Data Saved');
    }
    
    )
    .catch((error)=>{
                res.status(500).json({msg:'Sorry!Error Occured'});
                return;
            })
    

});

router.get('/register',(req,res)=>{
    RegisterModel.find()
    .then((data)=>{
           res.json(data);
        })
    .catch((error)=>{
        console.log('error:' ,error)
        res.send(error);
    });

});

router.post('/register',async (req,res)=>{
    
    try {
        const password = req.body.password;
        const password2 = req.body.password2;
        const email = req.body.email;
    
        if (password === password2) {
          const user = new RegisterModel(req.body);
          const userExist = await RegisterModel.findOne({ email: email });
          if (userExist) {
            res.status(400).send("user already exist");
          } else {
            user
              .save()
              .then((result) => {
                res.status(200).send("registered");
              })
              .catch((err) => {
                res.status(400).send("/register error");
                console.log("registration error");
              });
          }
        } else {
          res.status(400).send("password does not match");
        }
    
        // console.log(req.body);
      } catch (error) {
        res.status(401).send(error);
      }

});


router.post('/login',async(req,res)=>{
    const userEmail = req.body.email;
    const userPass = req.body.password;
    try{
    const userExist = await RegisterModel.findOne({email: userEmail});
          if(userExist.password === userPass){
            let token = await userExist.generateAuthToken();
            res.cookie("jwt",token,{
              httpOnly:true,
            });
            res.status(200).send("logged in");
          }
          else {
            res.status(400).send("Incorrect Password");
          }
    }
    catch{
      res.status(500).send("user not found")
    }
  });
  
  router.post('/logout',async (req,res)=>{
    res.clearCookie('jwt',{path:'/'});
    res.status(200).send('logout');
  });
  
  

module.exports = router;