import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Longest Repeating Subsequence</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Make and matrix and initialise it as zero</p>
<p>Check if string i-1 ==string j-1 : update matrix[i][j]=diagonal value + 1</p>
<p>Else: max of (curr value in matrix and left value in matrix)</p>

   <h2>Code</h2>
    <h3>
          T.C:O(n^2)
          <br />
          S.C:O(n^2)
        </h3>

        <pre className="code">
    {
        `
int LongestRepeatingSubsequence(string str)
{
          // Code here
  int m=str.length();
  int n=str.length();
  
  int lcs[m+1][n+1]={0};
  
  for(int i=0;i<=m;i++)
  {
      for(int j=0;j<=n;j++)
      {
          if(i==0||j==0)
              lcs[i][j]=0;
      }
  }
  
  for(int i=1;i<=m;i++)
  {
      
      for(int j=1;j<=n;j++)
      {
          
          if(str[i-1]==str[j-1]&&i!=j)
              lcs[i][j]=lcs[i-1][j-1]+1;
          else
              lcs[i][j]=max(lcs[i-1][j],lcs[i][j-1]);
          
      }
  }

  return lcs[m][n];
}
        `
}
</pre>
More solutionns given <a href="https://www.geeksforgeeks.org/longest-repeating-subsequence/">here</a>
      </div>


    </div>
  );
};

export default String;