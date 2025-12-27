import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Find pairs with a given sum in a DLL.</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
Initialize two pointer variables one at start , one at end<br/>
If current sum of first and second is less than x, then we move first in forward direction. else we move second in backward direction.<br/>
The loop terminates when two pointers cross each other (second-next = first), or they become the same (first == second). <br/>

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void pairSum(struct Node *head, int x)
{

    struct Node *first = head,*second = head;
    
    while (second->next)
        second = second->next;
 
    bool found = false;

    while (first != second && second->next != first)
    {

        if ((first->data + second->data) == x)
        {
            found = true;
            cout << "(" << first->data<< ", "<< second->data << ")" << endl;
 
            first = first->next;
            second = second->prev;
        }
        else
        {
            if ((first->data + second->data) < x)
                first = first->next;
            else
                second = second->prev;
        }
    }

    if (!found)
        cout << "No pair found";
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
