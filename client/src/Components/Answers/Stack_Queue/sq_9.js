import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Next Greater Element </h1>
      </div>
<br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Insert 0 in an stack</p>
<p>Now for each element : while arr[s.top] {"<"} arr[i] : store it in array at s.top() index ans pop() it  </p>
<p>After this while loop , push i .</p>
<p>If stack not empty : store -1 for remaining elements</p>     
     
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
 vector<long long> nextLargerElement(vector<long long> arr, int n){

  vector<long long> ans;
  long long  nxtg[n];
  stack<long long>s;
  
  s.push(0);
  
  for(int i=1;i<n;i++)
  {   

      while(!s.empty()&&arr[i]>arr[s.top()])
      {
          nxtg[s.top()]=arr[i];
        s.pop();
      }

      s.push(i);
  }
  
 if(!s.empty())
  {
      while(!s.empty())
       {   nxtg[s.top()]=-1;
      s.pop();
       }
  }
 
 for(int i=0;i<n;i++)
  cout<<nxtg[i]<<" ";
 
 return ans;
     }
 
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
