import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div style={{border:'2px solid black',backgroundColor:"white",marginTop:'20px',display:'flex',justifyContent:'center',borderRadius:'50px 50px 50px 50px'}}>

         <h1 >Move last element to front of linked list:</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',justifyContent:'center',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'0px',display:'flex',justifyContent:'center'}}>
<div>

<h1>Optimal Approach :</h1>

<p>
  1.We will find last and previous of last node.<br/>
  2.Make next of prev as NULL and next of end as beg.<br/>
  3.At last,make end as head pointer.
</p>

<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>

<pre className="code">
  {
    `
    void moveToFront(Node **head_ref) 
{ 
   
    if (*head_ref == NULL || (*head_ref)->next == NULL) 
        return; 
 
    Node *secLast = NULL; 
    Node *last = *head_ref; 
  
    while (last->next != NULL) 
    { 
        secLast = last; 
        last = last->next; 
    } 
  
    secLast->next = NULL; 
  
    last->next = *head_ref; 

    *head_ref = last; 
} 
    `
  }
</pre>

   
      
         </div>
</div>
 
       </div>
    )
}
}

export default one;
