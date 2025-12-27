import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Reverse First K elements of Queue </h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Push into stack till k and then insert back into queue</p>
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   
   queue<ll> modifyQueue(queue<ll> q, int k)
   {
       //add code here.
       
       stack<int> s;
       
       int t=k;
       
        while(t--)
       {
           s.push(q.front());
           q.pop();
       }
       
       queue<ll>qu;
       
       while(!s.empty())
       {
           qu.push(s.top());
           s.pop();
       }
       while(!q.empty())
       {
           qu.push(q.front());
           q.pop();
       }
       
       return qu;
   }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
