import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Next Permutation</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Here first we will check if numbers are in descending order, decrement i till it is.</p>
<p>Now,decrement j, till we find a number less than arr[i].</p>  
  <p>Swap them , and reverse string from i to j (as it is in descending order and we will make it ascending order i.e. minimum number) {
    
  })</p>
  
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
      int i=n-2,j=n-1;
	           
      while(arr[i]>arr[i+1]&&i>0)
          i--;
                
      while(arr[i]>arr[j]&&j>0)
          j--;
            
      swap(arr[i],arr[j]);
            
      j=n-1;
      i++;
      
      while(i<j)
      {
        swap(arr[i],arr[j]);
        j--;
        i++;
      }
    
     for(auto i:arr)
         cout<<i<<" ";
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;