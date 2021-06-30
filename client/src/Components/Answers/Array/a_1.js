import React from 'react'
import '../../Answers/answer.css';

class a_1 extends React.Component {

render(){
    return (
        <div className="div">

 
     <div className="ans_heading">

         <h1 >Reverse a Linked List</h1><br/>
         </div>

         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Keep swapping starting and ending numbers and move to next element and do the same.</p>
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<pre className="code">
  {
    `
    string reverseWord(string str){
    
        //Your code here
        
        int start=0;
        int end=str.length()-1;
        
        while(end>start)
        {
            swap(str[end],str[start]);
            start++;
            end--;
        }
        
        return str;
      
          
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

export default a_1;
