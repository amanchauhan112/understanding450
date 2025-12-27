import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Program for n’th node from the end of a Linked List</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>One approach is to calculate length and traverse till (length - n-1)</p>
  <p>Another is to make two pointers and move second poiter n times ahead</p>
<p>Move both  pointers till second reaches NULL , and return first pointer.</p>
    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void printNthFromLast(struct Node *head, int n)
{
  struct Node *main_ptr = head;
  struct Node *ref_ptr = head;

  int count = 0;
  if(!head)
  {
     while( count < n )
     {
        if(ref_ptr == NULL)
        {
           printf("%d is greater than the no. of "
                    "nodes in list", n);
           return;
        }
        ref_ptr = ref_ptr->next;
        count++;
     }
    
     if(ref_ptr == NULL)
     {
        head = head->next;
        if(head != NULL)
            printf("Node no. %d from last is %d ", n, main_ptr->data);
     }
     else
     {
       while(ref_ptr != NULL)
       {
          main_ptr = main_ptr->next;
          ref_ptr  = ref_ptr->next;
       }
       printf("Node no. %d from last is %d ", n, main_ptr->data);
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
