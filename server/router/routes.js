const express = require("express");
const router = express.Router();

const CommentModel=require('../model/comment_schema')
const RegisterModel=require('../model/register_schema')
const cookie = require('cookie');


router.get('/:id',(req,res)=>{

    CommentModel.find().sort({createdAt: -1})
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
    // newComment.userID = req.user._id;
    newComment.save()
    .then((result)=>
    {
      console.log(userId);
        console.log('Data Saved');
    }
    
    )
    .catch((error)=>{
                res.status(500).json({msg:'Sorry!Error Occured'});
                return;
            })
    

});

router.get('/register/:id',(req,res)=>{
    RegisterModel.find()
    .then((data)=>{
           res.json(data);
        })
    .catch((error)=>{
        console.log('error:' ,error)
        res.send(error);
    });

});

router.patch('/save/:id',async(req,res)=>{
  const id= req.params.id;
  try{
      const editNote = await CommentModel.findByIdAndUpdate(id)
      try{
      editNote.comment = req.body.comment
      editNote.save()
      .then((result)=>console.log(result))
      .catch((error)=>console.log(error+" id not found"))
      }
      catch(error){
          console.log(error);
      }
  }
  catch{
      console.log("not updated"); 
  }
})

router.delete('/save/:id',async (req,res)=>{
  const id = req.params.id;
  CommentModel.findByIdAndDelete(id)
  .then(()=>{
    
  })
  .catch(()=>{
      console.log("error while deleting");
  })
})

// router.post('/registe/:id',async (req,res)=>{
    
//     try {
//         const password = req.body.password;
//         const password2 = req.body.password2;
//         const email = req.body.email;
    
//         if (password === password2) {
//           const user = new RegisterModel(req.body);
//           const userExist = await RegisterModel.findOne({ email: email });
//           if (userExist) {
//             res.status(400).send("user already exist");
//           } else {
//             user
//               .save()
//               .then((result) => {
//                 res.status(200).send("registered");
//               })
//               .catch((err) => {
//                 res.status(400).send("/register error");
//                 console.log("registration error");
//               });
//           }
//         } else {
//           res.status(400).send("password does not match");
//         }
    
//         // console.log(req.body);
//       } catch (error) {
//         res.status(401).send(error);
//       }

// });

router.post('/register',async (req,res)=>{
  const newUser = new RegisterModel(req.body);
  const userExist = await RegisterModel.findOne({email: newUser.email});
  if(!userExist)
  {
      if(newUser.password===newUser.password2){
          const token =await newUser.generateAuthToken();
          console.log(token);
          res.status('200').json("registered");
        }
        else{
            res.status('400').json('password does not match');
        }
  }
  else {
      res.status('400').json('Email already exists');
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