import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Deletion from a Circular Linked List.</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Simpley traverse and delete , end will be when head Node is reached</p>
  

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void deleteNode(Node** head, int key) 
{
    if (*head == NULL)
        return;
          
    // If the list contains only a single node
    if((*head)->data==key && (*head)->next==*head)
    {
        free(*head);
        *head=NULL;
        return;
    }
      
    Node *last=*head,*d;

    if((*head)->data==key) 
    {
 
        while(last->next!=*head)
            last=last->next;

        last->next=(*head)->next;
        free(*head);
        *head=last->next;
    }

    while(last->next!=*head&&last->next->data!=key) 
    {
        last=last->next;
    }
 
    if(last->next->data==key) 
    {
        d=last->next;
        last->next=d->next;
        free(d);
    }
    else
        cout<<"no such keyfound";
    }
  
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
