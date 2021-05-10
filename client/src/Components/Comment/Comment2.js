// import React,{Component} from 'react'
// import axios from 'axios';
// import './Comment.css';
// class Comment extends Component {
      
//     state={
//         comment:'',
//         posts:[],
//     };

//     componentDidMount=()=>{
//         this.getComment();
//     }
//     componentDidUpdate=()=>{
// this.getComment();
//     }
    

//     getComment=()=>{
//         axios.get('http://localhost:8080/api')

//         .then((response)=>{
//           const data = response.data;
//           this.setState({posts:data})
//         // console.log('Data Recieved');
       
//         })
//        .catch(()=>{
//            alert('Error retireiving data!!');
//        });
//     }

//     displayComment = (posts) =>{

//         if(!posts.length) return null;

//         return posts.map((post,index)=>(

//             <div key={index}>
//             <h4>{post.comment}</h4>

//             </div>
//         ));
//     };

//     handleChange=(event)=>{
//         const target=event.target;
//         const name=target.name;
//         const value=target.value;

//         this.setState({
//             [name]:value
//         });

//     }
    
//     resetUserInput=()=>{

//         this.setState({
//             comment:'',
//         });
//     };

//     submit=(event) =>{

//         event.preventDefault();

//         console.log(this.state);

//         const payload={
//             comment:this.state.comment,
            
//         };

//         axios({
//             url:'http://localhost:8080/api/save',
//             method:'POST',
//             data: payload
//         })
//         .then(()=>{
//             console.log('Data Recieved');
//             this.resetUserInput();
//         })
//         .catch(()=>{
//             console.log('Error from axios method')
//         })

//     };

//     render(){

  

//     return (
//         <div>
//             <form onSubmit={this.submit}>

//              <input
//               type="text" 
//               name="comment"
//               required="true"
//               id="comment"
//               placeholder="Comment..."
//               value={this.state.comment}
//               onChange={this.handleChange}
//               />

//               <button >Comment</button>
//               </form>
              
// <p style={{fontWeight:'bold'}}>Comments:({this.state.posts.length})</p>

// <hr/>
// <div>
//     {this.displayComment(this.state.posts)}
// </div>
//         </div>
//     )
// }



// }

// export default Comment

import React from 'react';
import './Comment.css';

import { useState } from "react";



export default function Comment2(){

    
const [inputs, setInputs] = useState({});

const apiPost = async () => {

   try{ 
    const res = await fetch("http://localhost:8080/api/save", {
      method: "POST",
      body: JSON.stringify({
        comment: inputs.comment,
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    console.log(res.status)  
    }
    catch{
      console.log("note not posted")
    }
     

  };

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log(inputs);
  };

    return(<form onSubmit={handleSubmit}>
        <input 
            type="text"
            id="standard-required"
            name="comment" 
            required
            placeholder="Comment"
            onChange={handleChange} 
        />
        <br/>
             <input 
            type="submit" 
            value="comment" 
            onChange={handleChange}
        />
    </form>);
}