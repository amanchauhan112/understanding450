import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Evaluation of Postfix Expression </h1>
      </div>

<br/>
      <div className="solution">

      <h1>Optimal Approach :</h1>
<p>To evaluate a postfix expression , first insert into stack till we have numbers</p>
<p>Now if an operator arrives, pick top two elements and apply operator as (2nd top element (operator) top element)</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
      int evaluatePostfix(string S)
      {
          // Your code here
          
          stack<int>s;
          
          for(int i=0;i<S.length();i++)
          {
              if(S[i]>='0'&&S[i]<='9')
                  s.push(S[i]-'0');
              else
              {
              int n1=s.top();
              s.pop();
              
              int n2=s.top();
              s.pop();
              
              if(S[i]=='*')
                  s.push(n1*n2);
              
              else if(S[i]=='+')
                  s.push(n1+n2);
              
              else if(S[i]=='-')
                  s.push(n2-n1);
              
              else if(S[i]=='/')
                  s.push(n2/n1);
              
          }}
          
          return s.top();
      }
            `}
        </pre>

        Check one more solution given <a href="https://www.geeksforgeeks.org/stack-set-4-evaluation-postfix-expression/">here</a>
      </div>
    </div>
  );
};

export default sq;
