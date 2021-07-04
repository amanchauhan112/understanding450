import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Sort a LL of 0's, 1's and 2's</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Count 0 , 1 and 2s and put them in linked list</p>
  

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void sortList(Node *head)
{
    int count[3] = {0, 0, 0}; // Initialize count of '0', '1' and '2' as 0
    Node *ptr = head;

    while (ptr != NULL)
    {
        count[ptr->data] += 1;
        ptr = ptr->next;
    }
 
    int i = 0;
    ptr = head;
 
  while (ptr != NULL)
    {
        if (count[i] == 0)
            ++i;
        else
        {
            ptr->data = i;
            --count[i];
            ptr = ptr->next;
        }
    }
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
