import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Reverse a Doubly Linked list.</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>

<h1>Approach 1:</h1>
<p>make next to prev and prev to next</p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
Node* reverseDLL(Node * head)
{
    //Your code here
   
    
    Node*temp=NULL;
    Node*curr=head;
    
    while(curr)
    {
    temp=curr->prev;
    curr->prev=curr->next;
    curr->next=temp;
    curr=curr->prev;
    }

    if(temp)
        head=temp->prev;
    return head;
}
`
}
</pre>
<h1>Approach 2:</h1>
  <h3>As it is doubly LL , we can do swapping easily and move our pointers</h3>
  <p> Swap front and back  </p>
  <pre className="code">
{
`
Node* reverseDLL(Node * head)
{
    //Your code here
    
    Node*start=head;
    Node*end=head;
    
    while(end->next)
    {
        end=end->next;
    }
    
    while(start!=end&&start->prev!=end)
    {
        swap(start->data,end->data);
        start=start->next;
        end=end->prev;
    }
    
    return head;
}
`
}
</pre>
  
</div>

  </div>
     
    )
}

export default ll
