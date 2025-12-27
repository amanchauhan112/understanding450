import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Check whether the Singly Linked list is a palindrome or not</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Reverse half of the linked list and check if other half is same or not</p>
<p>After this reverse it back to make it original linked list.</p>
  

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void reverse(struct Node** head_ref) 
{ 
    struct Node* prev = NULL; 
    struct Node* current = *head_ref; 
    struct Node* next; 
    
    while (current != NULL) 
    { 
        next = current->next; 
        current->next = prev; 
        prev = current; 
        current = next; 
    } 
    *head_ref = prev; 
} 

bool compareLists(struct Node* head1, 
                  struct Node* head2) 
{ 
    struct Node* temp1 = head1; 
    struct Node* temp2 = head2; 

    while (temp1 && temp2)
    { 
        if (temp1->data == temp2->data) 
        { 
            temp1 = temp1->next; 
            temp2 = temp2->next; 
        } 
        else
            return 0; 
    } 

    if (temp1 == NULL && temp2 == NULL) 
        return 1; 

    return 0; 
} 

bool isPalindrome(struct Node* head) 
{ 
    struct Node *slow_ptr = head, *fast_ptr = head; 
    struct Node *second_half, *prev_of_slow_ptr = head; 
    
    struct Node* midnode = NULL; 

    bool res = true; 

    if (head && head->next)
    {
 
        while (fast_ptr && fast_ptr->next) 
        { 
            fast_ptr = fast_ptr->next->next; 

            // keep track of prev of slow for odd size

            prev_of_slow_ptr = slow_ptr; 
            slow_ptr = slow_ptr->next; 
        } 

        // fast_ptr would become NULL when there are even elements in list

        if (fast_ptr != NULL)
        { 
            midnode = slow_ptr; 
            slow_ptr = slow_ptr->next; 
        } 

        second_half = slow_ptr; 
        prev_of_slow_ptr->next = NULL; 
        
        // Reverse the second half 
        reverse(&second_half); 
        
        // compare 
        res = compareLists(head, second_half); 

        // Construct the original list back 
        reverse(&second_half); 
        
        // If there was a mid node (odd size case)
        // which was not part of either first half
        // or second half. 
        if (midnode != NULL)
        { 
            prev_of_slow_ptr->next = midnode; 
            midnode->next = second_half; 
        } 
        else
            prev_of_slow_ptr->next = second_half; 
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
