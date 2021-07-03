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
     
         <h1>Add two numbers represented by linked lists</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>



<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3>

<pre className="code">
  {
    `
   
struct Node* reverse(struct Node *node)
{
    // code here
    
    stack<int>s;
    
    Node*head=node;
    
    Node*temp=head;
    
    while(temp)
    {
        s.push(temp->data);
        temp=temp->next;
    }
    
    temp=head;
    
    while(temp)
    {
        temp->data=s.top();
        temp=temp->next;
        s.pop();
    }

    return head;
    
}

struct Node* addTwoLists(struct Node* first, struct Node* second)
{
    Node*temp1=first;
    Node*temp2=second;
    
    int c1=0,c2=0;
    
    reverse(temp1);
    reverse(temp2);
    
    while(temp1)
    {
        temp1=temp1->next;
        c1++;
    }
    
    while(temp2)
    {
        temp2=temp2->next;
        c2++;
    }
    
    int max;
    
    if(c1>c2)
        max=c1;
    else
        max=c2;
    
    temp1=first;
    temp2=second;
    
    while(max--)
    {
    if(!temp1->next&&temp2->next)
        temp1->next=new Node(0);
    else if(!temp2->next&&temp1->next)
        temp2->next=new Node(0);
    
    if(temp1->next)
        temp1=temp1->next;
    
    if(temp2->next)
        temp2=temp2->next;
    }
    
    temp1=first;
    temp2=second;
    
    int carry=0;
    Node * new_list = new Node(0);
    Node*head=new_list;
    
    while(temp1&&temp2)
    {
        int sum=temp1->data+temp2->data+carry;
        
        if(sum<10)
        {
            new_list->next=new Node(sum);
            carry=0;
        }
        else
        {
            int rem;
            
            rem=sum%10;
            
            carry=1;
            
            new_list->next=new Node(rem);
            
            
        }
        
        new_list=new_list->next;
        
        temp1=temp1->next;
        temp2=temp2->next;
        
    }
    
    if(carry)
        new_list->next=new Node(1);
    
    head=head->next;
    reverse(head);
    
    while(head)
    {
        cout<<head->data<<" ";
        head=head->next;
        
    }
  
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
