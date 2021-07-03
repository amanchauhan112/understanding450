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

         <h1 >Reverse a Linked List</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'0px',display:'flex',justifyContent:'center'}}>
<div>

<h1>Optimal Approach :</h1>
<p>
    This is a simple Approach in which we will be taking O(1) Space:<br/>
    1.We will point our start node at head and prev at null.<br/>
    2.we will make next of start as prev , and shift each node to it's next node.<br/>
    3.Since we made neaxt of start as prev,we need to maintain temp variable that stays at next of start.<br/>
    4.We now move start to temp and prev to start(previous start)  and repeat same steps as step 2.<br/>
</p>


<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<h2>Iterative:</h2>
<pre className="code">
  {
    `

   
   struct Node* reverseList(struct Node *head)
   {
       // code here
       // return head of reversed list
       
       
       if(!head||!head->next)
           return head; 
       
       Node*prev=NULL,*start=head;
       Node*temp;
       
       
       while(start)
       {
         temp=start->next;
         start->next=prev;
         prev=start;
         start=temp;
       }
       
       return prev;
    }
    `
  }
</pre>

   <h2>Recursive:</h2>
      <pre className="code">
          {

              `
              struct Node* revList(struct Node *head,Node*prev)
              {
                  
                  if(!head)
                     return prev;
                     
                 Node*temp=head->next;
                 head->next=prev;
                 return revList(temp,head);
                 
              }

              struct Node* reverseList(struct Node *head)
              {
                  // code here
                  // return head of reversed list
                  
                  
                  
                  if(!head||!head->next)
                      return head;
                  
                  return revList(head,NULL);        
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
