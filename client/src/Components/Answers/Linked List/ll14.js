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

         <h1 >Quick Sort in Linked List:</h1><br/>
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
    struct node * partition(struct node *head, struct node *tail){
    
        node * prev=head, *cur=head->next;
        
        node *pivot = head;
        
        while(cur != tail->next){
            
        if(cur->data < pivot->data){
            
        swap(prev->next->data,cur->data);
        
        prev = prev->next;
        
        }
        
        cur = cur->next;
        
        }
        
        swap(pivot->data,prev->data);
        
        return prev;
        
        }
        
        void quickSortRec(struct node * head, struct node *tail){
            
        if(head == tail || tail == NULL || head == NULL )
            return;
            
        // To find the pivot element
        
        struct node *pivot = partition(head , tail);
        
        // Recursive calls to quickSortRec procedure
        
        quickSortRec(head, pivot);
        quickSortRec(pivot->next, tail);
        
        }
        
        void quickSort(struct node **headRef) {
        node *tail = *headRef;
        
        //To find the tail
        while(tail->next != NULL)
            tail = tail->next;
            
        quickSortRec(*headRef, tail);
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
