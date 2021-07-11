import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Smallest number with at least n trailing zeroes in factorial</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We need to find n trailng zeroes, so , here our max number can be 5e4 for which we will find our factorial</p>
  <p>trail function is used to find number of trailing zeroes</p>
  <p>As we do inn binary search, we will keep checking number of zeroes in mid.</p>
 <p>If number of zeroes greater than or equal to n , store it in ans if less than prev ans and check left half</p>
 <p>If zeroes less than n, we will check in right half</p>
   <h2>Code</h2>

        <h3>
          T.C:O(logn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
 int trail_(int x) 
 {
  int ans = 0;

    while (x) 
    {
        ans += x/5;
        x = x/5;
    }
  return ans;
}

int findNum(int n)
{
  int l = 0, r = 5e4, mid, ans = INT_MAX;
  
  while (l <= r) 
  {
      mid = l + (r-l)/2;

      if (trail_(mid) >= n) 
      {
          ans = min(ans, mid);
          r = mid - 1;
      }

      else l = mid + 1;
  }
  return ans;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
