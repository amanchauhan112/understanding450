import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div style={{border:'2px solid black',backgroundColor:"white",marginTop:'20px',display:'flex',justifyContent:'center',borderRadius:'50px 50px 50px 50px'}}>

         <h1 >Find Largest sum contiguous Subarray(Kadane's Algorithm)</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'0px',display:'flex',justifyContent:'center'}}>
<div>

<h1>Optimal Approach :</h1>
<p>The Approach is simple:</p>
<p>We will keep track of sum till now</p>
<p>If sum goes below 0 , make it 0</p>
<p>If sum greator than final sum , make finalsum=sum.</p>
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<h2>Kadane's Algorithm</h2>
<pre className="code">
  {
    `
    int maxSubarraySum(int arr[], int n){
    
      // Your code here

      int finalsum=0;

      int i=0;
      
      int sum=0;
      
      while(i<n)
      {
      sum+=arr[i];
      
      if(sum<0)
          sum=0;
      
      if(sum>finalsum)
          finalsum=sum;
          
      i++;
      }
      
      return finalsum;
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
