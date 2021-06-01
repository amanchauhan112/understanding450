const express = require("express");
const router = express.Router();
const jwt=require('jsonwebtoken');

const CommentModel=require('../model/comment_schema')
const RegisterModel=require('../model/register_schema')
const User=require('../model/User')

const RequireLogin=require('../middleware/auth') 

const {ensureAuth,ensureGuest}=require('../middleware/reqLogin')


router.get('/comment',(req,res)=>{

    CommentModel.find({ }).sort({createdAt: -1})
    .populate("postedBy","_id name")
    .then((data)=>{
           res.json(data);
        })
    .catch((error)=>{
        console.log('error:' ,error)
    });

});

router.post('/save',RequireLogin,(req,res)=>{

  console.log(req.body.user);
  const comment=req.body
    // const comment =  {
    //   ...comment,
    //   postedBy:req.user
    // }
    // .populate("comments.postedBy","_id name")
    if(!comment){
      return  res.status(422).json({error:"Please add all the fields"})
    }
    const newComment=new CommentModel({
      ...comment,
      postedBy:req.user
    });
    newComment.save()
    .then((result)=>
    {
      console.log(result);
        console.log('Data Saved');
        res.json({post:result})
    }    
    )
    .catch((error)=>{
                res.status(500).json({msg:'Sorry!Error Occured'});
                return;
            })
    

});

router.get('/myposts/',RequireLogin,(req,res)=>{
  CommentModel.find({postedBy:req.user})
  .populate("postedBy","_id name")
  .then(myposts=>{
    res.json({myposts})
  })
  .catch(err=>{
    console.log(err)
  })
})

router.get('/register/',(req,res)=>{
    RegisterModel.find()
    .then((data)=>{
           res.json(data);
        })
    .catch((error)=>{
        console.log('error:' ,error)
        res.send(error);
    });

});

router.patch('/save/:id',async( req,res)=>{
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

// router.delete('/save/:id',async (req,res)=>{
//   const id = req.params.id;
//   CommentModel.findByIdAndDelete(id)
//   .then(()=>{
    
//   })
//   .catch(()=>{
//       console.log("error while deleting");
//   })
// })

// router.post('/registe/d',async (req,res)=>{
    
//         if(!email||!password||!password2)
//         {
//          return res.status(400).send({error:"Please fill all fields"});

//         }
//         else if (password === password2) {


//           for(var i=0;i<email.length;i++)
//           {
//             if(email[i]===" ")
//             {
//               console.log("Any Charachter of email cannot be space")
//               return res.status(400).json({error:"Any Charachter of email cannot be space"});
  
//             }
//           }

//           const user = new RegisterModel(req.body);
//           const userExist = await RegisterModel.findOne({ email: email });
//           if (userExist) {
//             console.log("Anycannot be space")

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
//           console.log("AnyCpace")

//           res.status(400).send("password does not match");
//         }
    
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

router.post('/api/login',async(req,res)=>{
    const userEmail = req.body.email;
    const userPass = req.body.password;
    try{
    const userExist = await RegisterModel.findOne({email: userEmail});
    if(!userEmail||!userPass)
    {
      res.json({error:"Please fill all fields"})

    }     
    else if(userExist.password === userPass){
            // let token = await userExist.generateAuthToken();
            // res.cookie("jwt",token,{
            //   httpOnly:true,
            // });
            // res.status(200).send("logged in");

            try{
              const token = jwt.sign({_id:userExist._id.toString()},"genAuthToken "||process.env.SECRET_KEY)
              const {_id,name}=userExist
              res.json({token,user:{_id,name}})
 
          }catch(error){
              console.log("genAuthToken "+error);
          }

          }
          else {
            res.status(400).send("Incorrect Password");
          }
    }
    catch{
      res.status(500).send("user not found")
    }
  });
  
  router.get('/logout',async (req,res)=>{
    res.clearCookie('jwt',{path:'/'});
    // res.status(200).send('logout');

        req.logout()
    // res.redirect('https://understanding450.herokuapp.com/login')
  });
  

router.get('/logintemp',ensureGuest,(req,res)=>{
    // res.send('Login')
    // console.log("err in")
    res.status(400).send("error in");

})

router.get('/gooo',(req,res)=>{
  // res.send(req.user);
  User.find()
  .then((data)=>{
         res.json(data);
      })
  .catch((error)=>{
      console.log('error:' ,error)
      res.send(error);
  });
})

router.get('/dashboard',(req,res)=>{
//  console.log(req.user)
//  res.send(req.user)
    res.send('Dashboard')
  //   res.send(     //it is for a file where 
  //                             //  we want to access name 

  //                                //   write{{name }} to access it.
  //       req.user.firstName,
  //  )
    // res.redirect('http://localhost:3000/',{ name:req.user.firstName,})
})


router.get('/logoutemp',(req,res)=>{
    req.logout()
res.json('plogoutdashboard')
    // res.redirect('http://localhost:3000/login')
    // res.redirect('/dashboard')
})

module.exports = router;