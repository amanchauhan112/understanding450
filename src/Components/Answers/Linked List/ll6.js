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
           <h1 >Delete Duplicates in Linked List</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>

<p>

    1.Check if curr data same as next data
    2.If yes = do point current next to next's next.
</p>

<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>

<pre className="code">
  {
    `
    Node *removeDuplicates(Node *head)
    {
     // your code goes here
     
     if(!head||!head->next)
        return head;
    
    Node*start=head;
    
    while(start&&start->next)    
    {
        if(start->data==start->next->data)
        {
            // Node*del=start->next;
            start->next=start->next->next;
            // delete(del);
        }
        else
        {
            start=start->next;
        }
    }
    
    return head;
    
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
