import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>The celebrity Problem</h1>
      </div>
<br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First push all index to stack</p>
<p>Pick first two index as a and b</p>
<p>if mat[a][b]==1 , i.e. a know b so push b in stack as it may be celebrity</p>
<p>else: push a</p>

<p>Keep doing it until 1 element left</p>
<p>Now for last element we need to check if it is celebrity or not</p>
<p>Check its complete column and row  , if column 1 and row 0 : it is celebrity</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
    int celebrity(vector<vector<int> >& M, int n) {
      // code here 
      
      stack<int>s;
      for(int i=0;i<n;i++)
          s.push(i);
      
      while(s.size()>1)
      {
          int a=s.top();
          s.pop();
          int b=s.top();
          s.pop();
          
          if(M[a][b]==1)
              s.push(b);
          else
              s.push(a);
      }
      
      for(int i=0;i<n;i++)
      {
          if(M[s.top()][i]==1||M[i][s.top()]==0)
          {
              if(s.top()!=i)
                  return -1;
          }
      }
      return s.top();
      
  }
 
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
