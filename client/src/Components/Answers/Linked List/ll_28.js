import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Flatten a Linked List</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>

  <p>Maintain a start node at root and temp node</p>
<p>Traverse bottom list till temp become NULL</p>
<p>Place temp at start-{">"}next ans start at temp and do step 2 again till start become next .</p>

    <h2>Code</h2>
<h3>
T.C:O(n*k)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
Node* merge(Node* l1,Node* l2)
{
    
if(!l1)
return l2;

if(!l2)
return l1;

if(l1->data<l2->data)
{
l1->bottom=merge(l1->bottom,l2);
return l1;
}

else
{
l2->bottom=merge(l1,l2->bottom);
return l2;
}

}
   

Node* mergeSort(Node* head) {

    if(head==NULL || head->bottom==NULL)
return head;

Node* slow=head;
Node* fast=head->bottom;

while(fast && fast->bottom)
{
slow=slow->bottom;
fast=fast->bottom->bottom;
}

Node* newHead=slow->bottom;
slow->bottom=NULL;

return merge(mergeSort(head),mergeSort(newHead));

}

Node *flatten(Node *root)
{
   // Your code here
   Node*temp=root;
   Node*start=root;

    queue<int> q;
 
    while(temp)
{  
   while(temp)
   {

       q.push(temp->data);
       temp=temp->bottom;
   }
   temp=start->next;
   start=temp;
}



Node*x=new Node(0);
root=x;

while(!q.empty())
{
    Node*y=new Node(q.front());
    x->bottom=y;
    x=y;
    q.pop();

}

x=root;
mergeSort(x);
x=root->bottom;
return x;
}

`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
