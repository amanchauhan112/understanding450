import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div style={{border:'2px solid black',backgroundColor:"white",marginTop:'20px',display:'flex',justifyContent:'center',borderRadius:'50px 50px 50px 50px'}}>

         <h1 >Add 1 to number represented by linked list</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',justifyContent:'center',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'0px',display:'flex',justifyContent:'center'}}>
<div>

<h1>Optimal Approach :</h1>



<h2>Code</h2>
{/* <h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3> */}

<pre className="code">
  {
    `
    Node* reverse(Node*node)
    {
        // Node*start=head,*prev=NULL;
        
        // while(start)
        // {
        //     Node*temp=start->next;
        //     start->next=prev;
        //     prev=start;
        //     start=temp;
        // }
        
        // return prev;
        
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
    
    Node* addOne(Node *head) 
    {
        // Your Code here
        // return head of list after adding one
        
        if(!head)
            return head;
        
        int carry=1;
        
        reverse(head);
        int sum=0;
        
        Node*start=head;
        
        while(start)
        {
            sum=carry+start->data;
            if(sum>9)
            {
             start->data=sum-10;
             sum=sum-10;
            }
            else
            {
                start->data=sum;
                reverse(head);
                return head;
            }
        
            start=start->next;
        }
        
        if(carry)
        {
        Node*temp=new Node(1);
        reverse(head);
        temp->next=head;
        head=temp;
        return head;
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
