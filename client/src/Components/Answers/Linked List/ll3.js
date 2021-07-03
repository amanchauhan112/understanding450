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
            <h1 >Detect Loop in Linked List</h1><br/>
         </div>
         <br></br>
         <div className="solution" >
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
    bool detectLoop(Node* head)
    {
        // your code here
        
        Node*slow=head;
        Node*fast=head;
        
        while(fast&&fast->next)
        {
            slow=slow->next;
            fast=fast->next->next;
            
            if(slow==fast)
            {
                return 1;
            }
            
        }
        
        return 0;
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
