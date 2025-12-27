import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Reverse a string using Stack </h1>
      </div>
<br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Push all elements in stack and then pop them all</p>
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
char* reverse(char *S, int len)
{
    //code here
    stack<char>s;
    
    for(int i=0;i<len;i++)
        s.push(S[i]);
    
    int k=0;
    
    while(!s.empty())
    {
        S[k++]=s.top();
        s.pop();
    }
    
   return S;
}
 
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
