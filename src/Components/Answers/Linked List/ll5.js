import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        <div className="ans_heading">
    <h1 >Find Starting of Loop in Linked List:</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>



<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<h2>Method 1:</h2>
<pre className="code">

  {

    `
    Node* detectAndRemoveLoop(Node* head)
{
    // If list is empty or has only one node
    // without loop
    if (head == NULL || head->next == NULL)
        return NULL;
 
    Node *slow = head, *fast = head;
 
    // Move slow and fast 1 and 2 steps
    // ahead respectively.
    slow = slow->next;
    fast = fast->next->next;
 
    // Search for loop using slow and
    // fast pointers
    while (fast && fast->next) {
        if (slow == fast)
            break;
        slow = slow->next;
        fast = fast->next->next;
    }
 
    // If loop does not exist
    if (slow != fast)
        return NULL;
 
    // If loop exists. Start slow from
    // head and fast from meeting point.
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
 
    return slow;
}
    `
  }
</pre>
<h2>Method 2:</h2>
<pre className="code">
  {
    `
    Node* detectLoop(Node* head)
    {
     
        // Create a temporary node
        Node* temp = new Node;
        while (head != NULL) {
     
            // This condition is for the case
            // when there is no loop
            if (head->next == NULL) {
                return NULL;
            }
     
            // Check if next is already
            // pointing to temp
            if (head->next == temp) {
                break;
            }
     
            // Store the pointer to the next node
            // in order to get to it in the next step
            Node* nex = head->next;
     
            // Make next point to temp
            head->next = temp;
     
            // Get to the next node in the list
            head = nex;
        }
     
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
