import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div"  >

         
        <div className="ans_heading">

         <h1 >Delete Loop in Linked List</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>



<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>

<pre className="code">
  {
    `
    void removeLoop(Node* head)
    {

        // your code here
        
        Node*slow=head;
        Node*fast=head,*end=head,*prev;
 
        while(fast&&fast->next)
        {
            prev=slow;
            slow=slow->next;
            fast=fast->next->next;
            
            if(slow==fast)
            {
                     
       Node*ptr=head;
    
    if(slow==ptr)
    {
        prev->next=NULL;
    }
    else if(ptr==slow->next )
    {
        slow->next=NULL;
    }
    else
    {
    while(ptr->next!=slow->next )
    {
        slow=slow->next;
        ptr=ptr->next;
    }
    if(slow)
        slow->next=NULL;
    }
            return;
            }
            
        }
   
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
