import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div"  >

         
        <div className="ans_heading">
  
         <h1 >Merge Sort on Linked List:</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>



<h2>Code</h2>

{/* <h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3> */}
<h2>   Approach 1:</h2>

<pre className="code">
  {
    `
    Node*merge(Node*a,Node*b)
    {
        if(!a)
            return b;
        if(!b)
            return a;
        
        if(a->data<b->data)
           { a->next=merge(a->next,b);
               return a;
           }
        else
          {  b->next=merge(b->next,a);
            return b;}
        
        
    }
    
    Node* mergeSort(Node* head) {
        // your code here
        
       if(!head||!head->next)
        return head;
        
        Node*slow=head;
        Node*fast=head->next;
        
        while(fast&&fast->next)
        {
            slow=slow->next;
            fast=fast->next->next;
        }
        
        Node*right=slow->next;
        slow->next=NULL;
        
        return merge(mergeSort(head),mergeSort(right));
    }
    
    `
  }
</pre>
<h2>   Approach 2:</h2>
<pre className="code">
{

    `
 
void Split(Node* head, Node** a, Node** b) 
{ 
    Node* fast = head->next; 
    Node* slow = head;
    while(fast != NULL && fast->next != NULL)
    {
        slow = slow->next;
        fast = fast->next->next;
    }
    
  
    *a = head; 
    *b = slow->next; 
    slow->next = NULL; 
} 

Node *SortedMerge(Node *a, Node *b)
{
    if(a == NULL)
    {
        return b;
    }
    
    if(b == NULL)
    {
        return a;
    }
    
    Node *head = NULL, *tail = NULL;
    if(a->data < b->data)
    {
        head = tail = a;
        a = a->next;
    }
    else
    {
        head = tail = b;
        b = b->next;
    }
    
    while(a != NULL && b != NULL)
    {
        if(a->data < b->data)
        {
            tail->next = a;
            tail = a;
            a = a->next;
        }
        else
        {
            tail->next = b;
            tail = b;
            b = b->next;
        }
    }
    
    if(a == NULL)
    {
        tail->next = b;
    }
    else
    {
        tail->next = a;
    }
    
    return head;
}

void MergeSort(Node **headRef)
{
    Node* head = *headRef; 
    
    if ((head == NULL) || (head->next == NULL)) { 
        return; 
    } 
  
    Node* a, * b;
    Split(head, &a, &b); 
  
    MergeSort(&a); 
    MergeSort(&b); 
  
    *headRef = SortedMerge(a, b); 
}

Node* mergeSort(Node* head) 
{
    MergeSort(&head);
    
    return head;
}

    `
}

</pre>
         </div>
</div>
 
       </div>
    )
}
}

export default one;
