import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Maximum sum such that no 2 elements are adjacent(Stickler Thief)</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Create an array to store max sum till i </p>
<p>First we will take arr[0] and 2nd element as max(arr[0],arr[1])</p>
<p>Now we will check if previous of previous and curr element sum is more than previous element or not</p>
<p>We are doing this as we can't use adjacente elements</p>
<p>Last element will be our final answer</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`

//   ll-> long long

ll FindMaxSum(ll arr[], ll n)
{
    // Your code here
    
    if(n<1)
        return 0;
    
    if(n==1)
        return arr[0];
    
    if(n==2)
        return max(arr[0],arr[1]);
    
    if(n>2)
    {
        ll dp[n];
        
        dp[0]=arr[0];
        
        dp[1]=max(arr[0],arr[1]);
        
        int i=2;
        
        while(i<n)
        {
            dp[i]=max(dp[i-2]+arr[i],dp[i-1]);
            i++;
        }
        
        return dp[n-1];
    }
}

            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
