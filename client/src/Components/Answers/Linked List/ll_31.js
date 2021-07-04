import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Merge K sorted Linked list</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Here , we are sending 2 lists and comparing each element one by one and merging them.</p>
  

    <h2>Code</h2>
<h3>
T.C:O(nkLogk)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
Node* SortedMerge(Node* a, Node* b) 
{ 
    Node* result = NULL; 

    if (!a)           return (b); 
    else if(!b)     return (a); 
  
    if(a->data <= b->data) 
    { 
        result = a; 
        result->next = SortedMerge(a->next, b); 
    } 
    else
    { 
        result = b; 
        result->next = SortedMerge(a, b->next); 
    } 
  
    return result; 
} 
Node * mergeKLists(Node *arr[], int N)
{

Node* res = arr[0];
    for(int i = 1;i<N;i++)
    {
        res = SortedMerge(res,arr[i]);
    }
    return res;
    
}


`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
