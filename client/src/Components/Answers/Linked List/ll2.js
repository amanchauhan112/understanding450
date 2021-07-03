import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div" >

         
        {/* <div className="ans_heading"> */}
     <div className="ans_heading">

         <h1 >Reverse Linked List in group of given size</h1><br/>
         </div>
         <br></br>
         <div className="solution">
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
