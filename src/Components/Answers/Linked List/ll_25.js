import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Rotate a Doubly Linked list in group of Given Size.</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>We are making prev pointers as next and next as prev</p>
  

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
Node* reverseByN(Node* head, int k)
{
    if (!head)
        return NULL;
    head->prev = NULL;
    Node *temp, *curr = head, *newHead;
    int count = 0;
    while (curr != NULL && count < k) {
        newHead = curr;
        temp = curr->prev;
        curr->prev = curr->next;
        curr->next = temp;
        curr = curr->prev;
        count++;
    }

    // if count is not equal to k that means 
    //we have reversed the last set of linked list of size K 
    if (count >= k) {
        head->next = reverseByN(curr, k);
    }
    return newHead;
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
