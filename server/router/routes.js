const express = require("express");
const router = express.Router();

const CommentModel=require('../model/comment_schema')

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

module.exports = router;