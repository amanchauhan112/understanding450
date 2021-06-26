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

         <h1 >Reverse Linked List in group of given size</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',justifyContent:'center',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'0px',display:'flex',justifyContent:'center'}}>
<div>

<h1>Optimal Approach :</h1>



<h2>Code:</h2>
{/* <h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3> */}

<pre className="code">
  {
    `
    struct node *reverse (struct node *head, int k)
    { 
       
        node*start=head,*prev=NULL,*nxt=NULL; 
        
        int c=0;

while(start && c<k) {
    
    nxt=start->next;
    start->next=prev;
    prev=start;
    start=nxt;

    c++;
}

if(nxt)
    head->next=reverse(nxt, k);

return prev;

    };
       
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
