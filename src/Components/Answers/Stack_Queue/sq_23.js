import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Queue using Stacks</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
      <p>We are using two stacks 1 and 2</p>
<p>Push: directly push to 1, Pop: shift all elements from 1 to 2 ,pop top and shift them back to 1</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n) for pop and O(1) for push
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   void StackQueue :: push(int x)
   {
       // Your Code
   
       s1.push(x);
   }
   
   //Function to pop an element from queue by using 2 stacks.
   int StackQueue :: pop()
   {
           // Your Code   
           
           if(s1.empty())
               return -1;
           while(s1.size()!=1)
           {
               s2.push(s1.top());
               s1.pop();
           }
           int ans=s1.top();
           s1.pop();
           
           while(!s2.empty())
           {
               s1.push(s2.top());
               s2.pop();
           }
           return ans;
   }
   
    
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
