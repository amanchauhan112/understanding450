import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Queue Reversal </h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
      <p>We can do it by pushing all elements to stack and popping them</p>
      <p>But, we are going to do it using recursion:</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   void reverse(queue<int>& q)
   {
        if(q.empty())
           return;
           
      //pick all elements recursively     
       int a = q.front();
       q.pop();
       
       reverse(q);

       //this will push back elements from last to first recursively
       q.push(a);
   }
   
   queue<int> rev(queue<int> q)
   {
       // add code here.

       reverse(q);
       return q;
      
   }
    
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
