import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Clone a linked list with next and random pointer</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>First we are taking temp and curr at head</p>
<p>Then , insert a node between curr and cuur-next with data = curr</p>
<p>Now each node pointing to its copy using next pointer</p>
<p>Now start from head using curr pointer</p>

<h4>Important step</h4>
<p>Make curr-next-arb=curr-arb-next</p>
<p>Do this for all nodes.</p>
<pre>
    {
        `
   -----    
   |     
  1    2
 /   / |
1    2 |  3-NULL
|      | /      
 ------3

Here arb of 1 is pointing to 3
So, arb of next of curr(Copied 1) point to arb's next(Copied 3)

I.e. Copied one pointing to Copied 3 as original 1 poiniting to original 3.

In similar manner , we will clone the linked list.
        `
    }
</pre>

<p>Atlast , handle the remaining pointers</p>
    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
Node *copyList(Node *head) {
    

    Node*temp=head,*curr=head;
    
    while(curr)
    {
        temp=temp->next;
        
        Node*newx=new Node(curr->data);
        
        curr->next=newx;
        curr->next->next=temp;
        
        curr=temp;
    }

    curr=head;
    
    while(curr)
    {
        if(curr->arb)
            curr->next->arb=curr->arb->next;
            
        if(curr->next)
        {
            curr=curr->next->next;
        }

    }

    Node*start=head;
    
    Node*ptr=head->next;
    
    Node*clone=ptr;
    
    while(start && ptr)
    {
        if(start->next)
        start->next=start->next->next;
        
        if(ptr->next)
            ptr->next=ptr->next->next;

         
        start=start->next;
        ptr=ptr->next;
    }

    return clone;
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
