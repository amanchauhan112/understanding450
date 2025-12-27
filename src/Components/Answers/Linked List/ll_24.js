import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Rotate DoublyLinked list by N nodes.</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Find end node and Nth node</p>
<p>Make end connected to head and make a pointer to next of Nth node</p>
<p>Now make next of Nth node as NULL and next node of nth node as head(Previous next).</p>
<p>Make pointers next and prev accordingly</p>

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void rotate(struct Node** head_ref, int N)
{
    if (N == 0)
        return;
 
    struct Node* current = *head_ref;
 
   int count = 1;
    while (count < N && current != NULL) {
        current = current->next;
        count++;
    }
 
    if (current == NULL)
        return;
 
   struct Node* NthNode = current;
 
 while (current->next != NULL)
        current = current->next;

    current->next = *head_ref;
 
    (*head_ref)->prev = current;
 
  *head_ref = NthNode->next;
 
    (*head_ref)->prev = NULL;
 
    NthNode->next = NULL;
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
