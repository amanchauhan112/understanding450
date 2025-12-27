import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">
    <h1 >Split a Circular linked list into two halves.</h1>
</div>

    <br/>

<div className="solution">


<h1>Optimal Approach :</h1>
<p>Check end of linked list using end pointer</p>
<p>Find mid of linked list using Two pointer approach ( <a href="/ll_15" >Check here</a>)</p>
<p>Point head2 at next of mid and return</p>
  <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>

<pre className="code">
{
`
void splitList(Node *head, Node **head1_ref, Node **head2_ref)
{
    // your code goes here
    
    *head1_ref=head;
    *head2_ref=head;
    
    Node*slow=head;
    Node*fast=head->next;
    Node*end=head;
    
    while(end->next!=head)
        end=end->next;
    

while(fast!=head&&fast->next!=head)
        {
           
            slow=slow->next;
            
            fast=fast->next->next;
    
        }
    *head2_ref=slow->next;
    slow->next=*head1_ref;

    end->next=*head2_ref;
    
     
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
