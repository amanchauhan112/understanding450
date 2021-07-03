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
     <h1 >Common Elements in two sorted Linked List:</h1><br/>
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
    Node* findIntersection(Node* head1, Node* head2)
    {
        // Your Code Here
        
        Node*newList=new Node(0);
        Node*newListHead=newList;
        
        Node*h1=head1;
        Node*h2=head2;
        
        while(h1&&h2)
        {
            if(h1->data==h2->data)
            {
                Node*temp=new Node(h1->data);
                
                if(newList->data!=temp->data)
               { newList->next=temp;
                newList=newList->next;}
            }
            if(h1->data<h2->data)
                h1=h1->next;
            else
                h2=h2->next;
        }
        
        
        return newListHead->next;
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
