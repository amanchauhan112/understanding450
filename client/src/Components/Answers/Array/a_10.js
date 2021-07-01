import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div className="ans_heading">

         <h1 >Minimum no. of Jumps to reach end of an array</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p className="answer">
  We will add current index value to index to check how far can we go.
  <br></br>
  Now we have 3 cases:
  <p>If farthest is end of array = return 1+min_jumps</p>
  <p>If current index is farthest that means reaching to end is not possible.</p>
  <p>If we can go more i.e. i==eOW = increment min_jumps and make eoW=farthest.</p>
</p>
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>

<pre className="code">
  {
    `
    int minJumps(int arr[], int n){
     
          if(n<2)
              return 0;
  
          int min_jumps=0,farthest=0,endOfWindow=0;
          
          for(int i=0;i<n;i++)
          {
              farthest = max(farthest, i + arr[i]);
              
              if(farthest >= n-1)
                  return 1 + min_jumps;
          
              if(i == farthest)
                  return -1;//. If the index i is the farthest we can go, then we've
           if(i == endOfWindow)
          {
              min_jumps++;
              endOfWindow = farthest;
          }
  
      
          }
          
          return min_jumps;            
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
