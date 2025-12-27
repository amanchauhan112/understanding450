import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Word Break</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Add all value to map, create word of string till found in map , and if n the end word not in map, return false.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
            int wordBreak(string A, vector<string> &B) {
              //code here

              map<string,int>mt;
              
              int n=B.size();
              
              for(int i=0;i<n;i++)
                  mt[B[i]]++;
              
              string s="";
              
              int len=A.length();
              bool found=false;
              int i=0;
              
              while(len--)
              {
                  found=false;
                  s+=A[i++];
                  
                  if(mt[s]>0)
                      found=true;
                  
                  if(found)
                  {
                      string temp=s+A[i];
                      
                      if(mt[temp]==0)
                      {
                          s="";
                      }
                  }
              }
              
              if(s=="")
                  return 1;
              
              return 0;
              
          }
            `
        }
        </pre>
        <p>Check <a href="https://www.geeksforgeeks.org/word-break-problem-dp-32/">here</a> for more solutions</p>
    </div>


    </div>
  );
};

export default String;