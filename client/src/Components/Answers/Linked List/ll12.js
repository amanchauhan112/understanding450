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
    
         <h1 >Intersection point of Y shaped Linked List:</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>



<h2>Code</h2>

{/* <h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3> */}

<pre className="code">
  {
    `
    int intersectPoint(Node* head1, Node* head2)
    {
        // Your Code Here
        
        Node*h1=head1,*h2=head2;
        
        while(h1!=h2)
        {
            h1=h1->next;
            h2=h2->next;
            
            if(!h1)
                h1=head2;
            if(!h2)
                h2=head1;
        }
        
        return h1->data;
        
    }
    
    
    `
  }
</pre>

  There are many more solutions for this problem as given<a href="https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1#" >here</a>
      
         </div>
</div>
 
       </div>
    )
}
}

export default one;
