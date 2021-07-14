
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check Mirror in N-ary tree </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Insert elements in map and check for other array.</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
  int checkMirrorTree(int n, int e, int A[], int B[]) 
  {
      // code here
      
      unordered_map<int,stack<int>>mp;

      for(int i=0;i<2*e;i+=2) //(previously)->n now 2*e
      {
          mp[A[i]].push(A[i+1]);
      }

      for(int i=0;i<2*e;i+=2)
      {
        if(mp[B[i]].top()!=B[i+1])
            return 0;
              
        mp[B[i]].pop();    
      }
      
      return 1;
  }
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
