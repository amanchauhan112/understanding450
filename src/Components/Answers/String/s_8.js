import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Longest Palindrome in a String </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are going to update in a matrix  and then check if pallindrome or not.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n^2)
          <br />
          S.C:O(n^2)
        </h3>

        <pre className="code">
    {
        ` 
string longestPalin (string S) {
        // code here
          
        int n=S.length();
        
        int lps[n][n];
        int maxlen=1,start=0,end=0;
        
       for(int i=0;i<n-1;i++)
          {
              for(int j=i+1;j<n;j++)
              {
                  lps[i][j]=0;
              }
          }
        
        for(int i=0;i<n;i++)
            lps[i][i]=1;
       int r=0;
          for(int i=0;i<n-1;i++)
          {
  
              if(S[i]==S[i+1])
                  {
                      lps[i][i+1]=1;
                              
                      if(r==0)
                      {
                      start=i;
                      maxlen=2;
                      r=1;
                      }
                  }
          }
          
          
        for(int k=3;k<=n; k++)
        {
          for(int i=0; i<n-k+1; i++)
          {
              int j=i+k-1;
              if(lps[i+1][j-1] && S[i]==S[j])
              {
                  lps[i][j]=true;
                  
                  //only change is the when there is no Palindrome greater than length k,
                
                  if(k>maxlen)
                  {
                      start=i;
                      maxlen=k;
                 
                  }
              }
          }
        }
  
          end=start+maxlen-1;
          
          string ans="";
          
          for(int i=start;i<=end;i++)
              ans+=S[i];
          
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