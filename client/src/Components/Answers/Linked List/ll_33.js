import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Delete nodes which have a greater value on right side</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Whenever we find curr data less than curr next data , do:</p>
<p>Make a prev pointer to next of curr</p>
<p>Copy data from prev next to prev</p>
<p>Make curr next =  prev next</p>   
<p>Start traversing again</p> 

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
Node *compute(Node *head)
{
    
     Node*temp=head;
     Node*prev=head;
    
    while(temp->next)
    {   
        
        if(temp->data<temp->next->data)
        {
            prev=temp->next;
            temp->data=prev->data;
            temp->next=prev->next;
            temp=head;
        }
        else
        {
            temp=temp->next;
        }
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
