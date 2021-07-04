import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Count triplets in a sorted DLL whose sum is equal to given value “X”.</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Fix a curr node to each node one by one</p>
<p>For each node use two pointers to find sum of both , equal to <strong>(X - curr node data)</strong></p>

    <h2>Code</h2>
<h3>
T.C:O(n*n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int countPairs(struct Node* first, struct Node* second, int value)
{
    int count = 0;
 
    while (first != NULL && second != NULL &&
           first != second && second->next != first) {

        if ((first->data + second->data) == value) {
 
            count++;
          first = first->next;
          second = second->prev;
        }
   
        else if ((first->data + second->data) > value)
            second = second->prev;
 
        else
            first = first->next;
    }
 
    return count;
}

int countTriplets(struct Node* head, int x)
{

    if (!head)
        return 0;
 
    struct Node* current, *first, *last;
    int count = 0;
    
    last = head;
    while (last->next)
        last = last->next;
 
    for (current = head; current != NULL; current = current->next) {
 
        first = current->next;
 
        // count pairs with sum(x - current->data) in the range
        // first to last and add it to the 'count' of triplets
        count += countPairs(first, last, x - current->data);
    }

    return count;
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
