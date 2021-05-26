
import React from 'react';
import {useEffect,useState} from 'react';
import{useHistory} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';

// TODO OnChange execute edit function and save 

export const AllComment = ()=>{

    const history= useHistory();
    const [data, setdata] = useState([]);
    const [input,setInput] = useState({
      id:"",
      comment:""
    });

    useEffect(()=>{
     fetch('http://localhost:8080/api/save/').then(res=>{
            if(res.status!=='400'){
                return res.json()
            }
            else{
            //   history.push("/login");
            }
        }).then(data =>setdata(data))
        .catch((err)=>{
        //   history.push("/login");
        })
    });

    const useStyles = makeStyles((theme) => ({
     
        TextArea:{
          background: '#272727',
          border: '#272727',
        //   resize: 'none',
          color: 'white',
          fontFamily: 'calibri',
         width:'80%',
         display:'inline'
        },
      

      }));

    const classes = useStyles();

    async function del(id){
        console.log(id);
       await fetch('http://localhost:8080/api/save/'+id,{method: 'DELETE'})
        .then(()=>console.log("deleted "+id))
        .catch(()=>console.log("not deleted"));
      }

      function handleSelect(id,comment){
        if(input.id !== id){
          setInput({...input,
            id: id,
            comment: comment
          });
          
        }

      }
        
      function handleChange(target){
        
         setInput ({ ...input,
          [target.name]: target.value,
          
        })

      }
  
    async function edit(id){
      console.log(id);
      if(input.id===id){
        await fetch('/api/save/'+id,{
          method: 'PATCH',
          body:JSON.stringify({
            comment:input.comment 
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          
        })
        .then(()=>{
          console.log(" found and edited");
        })
        .catch(()=>{
          console.log("not edited")
        })
     }
    }  

    return(<div >
        <h1>Comment:</h1>
 {/* <p style={{fontWeight:'bold'}}>Comments:({this.state.posts.length})</p> */}
            
            {data.map((comment)=>(
                <div className="card" key={comment._id} >
               

                <br/>
                <TextareaAutosize
                    id={comment._id}
                    // autoComplete="off"
                    name="comment" 
                    className={classes.TextArea}
                    aria-label="minimum height" 
                    defaultValue={comment.comment}
                    onChange={(e)=>handleChange(e.target)}
                    onSelect={(e)=>handleSelect(comment._id,comment.comment)} 
                />    



                <IconButton aria-label="delete"  onClick={()=>del(comment._id)} >
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="SveRoudedIcon"  onClick={()=>edit(comment._id)} >
                  {/* <SaveRoundedIcon fontSize="small" /> */}
                  <p5>edit</p5>
                </IconButton>

  
            
            </div>
            ))}

            </div>)

}