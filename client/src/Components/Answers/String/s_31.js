import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Longest Common Subsequence </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Create a matrix of m+1 and n+1 and initialize 1st row and col with 0</p>
<p>For remaining values , if i-1 j-1 th charachter matches, curr value = (i-1,j-1)th value+1</p>
<p>Else: curr value = max (left value or above value)</p>
<p>In the end, print last place value(i.e. m,n th value)</p>
 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
            int lcs(int x, int y, string s1, string s2){
    
              // your code here
              int m=x;
              int n=y;
              
              int dp[m+1][n+1];
              
              for(int i=0;i<=m;i++)
              {
                  for(int j=0;j<=n;j++)
                  {
                      if(i==0||j==0)
                          dp[i][j]=0;
                  }
              }
              
              for(int i=1;i<=m;i++)
              {
                  for(int j=1;j<=n;j++)
                  {
                      if(s1[i-1]==s2[j-1])
                          dp[i][j]=dp[i-1][j-1]+1;
                      
                      else
                          dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
                          
                  }
              }
              
              return dp[m][n];
              
          }
          
            `
        }
        </pre>

    </div>


    </div>
  );
};

export default String;