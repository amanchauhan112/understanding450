import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Edit Distance</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Make a matrix and make element = i if j=0 and vice-versa</p>
<p>Now if characters equal, make element = upper diagonal value else element = 1+ minimum of left or upper value.</p>
 <p>In the end , return last element value.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n*m)
          <br />
          S.C:O(n*m)
    </h3>

        <pre className="code">
        {
            `
            int editDistance(string s, string t) {
              // Code here
              
              if(s==t)
                  return 0;
              
              int n=s.length();
              int m=t.length();
              
              if(n==0)
                  return m;
              
              if(m==0)
                  return n;
                  
              int dp[n+1][m+1];
              
              for(int i=0;i<=n;i++)
                  {
                      for(int j=0;j<=m;j++)
                      {
                          if(i==0)
                              dp[i][j]=j;
                              
                          else if(j==0)
                              dp[i][j]=i;
                              
                          else if(s[i-1]==t[j-1])
                              dp[i][j]=dp[i-1][j-1];
                          
                          else
                              dp[i][j]=1+min({dp[i-1][j],dp[i][j-1],dp[i-1][j-1]},comp);
                  }
                  }
              
              return dp[n][m];
          
              
              
          }
            `
        }
        </pre>
        <p>More solutions given <a href="https://www.geeksforgeeks.org/edit-distance-dp-5/">here</a></p>
    </div>


    </div>
  );
};

export default String;