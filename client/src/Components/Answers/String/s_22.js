import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Count All Palindromic Subsequence in a given String</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>If size is 1 , it will be pallindrome</p>
<p>Else, create a matrix, we will work on upper triangle.</p>
<p>for 0th row, value= 1, for 1st row ,if k and jth value equal, value=4 else 3</p>
<p>For other rows, if equal,value will be left + below value +1  else left , below and subtract below left diagonal element</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
int countPS(string str)
    {
        int n=str.length();
                
        if(n==1)
            return 1;
                    
        int dp[n][n];
         
        for(int i=0;i<n;i++)
        {
            for(int k=0,j=i;j<n;k++,j++)
              {
                  if(i==0)
                      dp[k][j]=1;
                  else if(i==1)
                      {
                          if(str[k]==str[j])
                              dp[k][j]=3;
                          else
                              p[k][j]=2;
                      }
                  else
                      {
                          if(str[k]==str[j])
                              dp[k][j]=dp[k][j-1]+dp[k+1][j]+1;
                          else
                              dp[k][j]=dp[k][j-1]+dp[k+1][j]-dp[k+1][j-1];
                      }

              }
        }
                
        return dp[0][n-1];           
    }
             
            `
        }
        </pre>
        Check more solutions <a href="https://www.geeksforgeeks.org/count-palindromic-subsequence-given-string/">here</a>
    </div>


    </div>
  );
};

export default String;