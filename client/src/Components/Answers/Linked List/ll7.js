import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div" >

         
        <div className="ans_heading">
    
         <h1 >Remove duplicate from unsorted Linked List:</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<h2>Method 1:</h2>
1.Sort Linked List using Merge Sort(Best suited for Linked List).<br/>
2.Then <a href="/ll_6"> remove duplicate using O(n) time.</a>


<h2>Code:</h2>
{/* <h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3> */}

<pre className="code">
  {
    `
    struct Node* revList(struct Node *head,Node*prev)
    {
        
        if(!head)
           return prev;
           
       Node*temp=head->next;
       head->next=prev;
       return revList(temp,head);
       
    }
   
   struct Node* reverseList(struct Node *head)
   {
       // code here
       // return head of reversed list
       
       
       
       if(!head||!head->next)
           return head;
       
       return revList(head,NULL);        
       
       Node*prev=NULL,*start=head;
       Node*temp;
       
       
       while(start)
       {
         temp=start->next;
         start->next=prev;
         prev=start;
         start=temp;
       }
       
       return prev;
       
    `
  }
</pre>

   
   <h2>Method 2:</h2>
      <p>
1.Use set to add elements one by one from Linked List.<br/>
2.Check if element is present in set then point to it's next element.
      </p>
      <h2>Code:</h2>

      <pre className="code">
        {
          `
          Node * removeDuplicates( Node *head) 
          {
           // your code goes here
          
          set<int>s;
          
          Node*temp=head;
          if(!temp)
          {
              return 0;
          }
            s.insert(temp->data);
          while(temp->next)
          {
                 if(s.find(temp->next->data)!=s.end())
                  {
                      temp->next=temp->next->next;
                  }
                  else{
                          temp=temp->next;
                      s.insert(temp->data);
                  
                  }
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
