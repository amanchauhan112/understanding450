import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Minimum Swaps for Bracket Balancing</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Count wrong pairs , and add it to answer.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
            int minimumNumberOfSwaps(string S){
              // code here 
              
              int n =S.length();
              
              int fault=0,open=0,close=0,ans=0;
              
              for(int i=0;i<n;i++)
              {
                  if(S[i]==']')
                  {
                      close++;
                      fault=close-open;
                  }
                  else
                  {
                  open++;    
                  
                  
                  
                  if(fault>0)
                  {
                      ans+=fault;
                      fault--;
                  
                  }
                  }    
              }
              return ans;

            `
        }
        </pre>
<h2>O(n) Space solution:</h2>
<pre className="code">
        {
            `
            int minimumNumberOfSwaps(string S){
              
              vector<int>vt; //for opening bracket index
              
              for(int i=0;i<n;i++)
                  if(S[i]=='[')
                      vt.push_back(i);
      
              int idx=0,ans=0,count=0;
              
              for(int i=0;i<n;i++)
              {
                  if(S[i]=='[')
                  {
                      count++;
                      idx++;
                  }
                  else
                  {
                      count--;
                      
                      if(count<0)
                          {
                              ans+=vt[idx]-i;
                              swap(S[i],S[vt[idx]]);
                              idx++;
                              count=1;
                              
                          }
                  }
              }
              return ans;
          }   
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;