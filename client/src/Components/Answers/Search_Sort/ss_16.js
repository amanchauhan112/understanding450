import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Product array Puzzle</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>The solution mentioned below takes these 3 cases:</p>
<p>1.If there are no zeroes in array , simply print mul/arr[i] , where mul is product of all elements</p>
<p>2.If it has 1 zero , at that particular index , we will print product else 0 </p>
<p>3.If more than 1 zero , then 0 in all index.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
vector<long long int> productExceptSelf(vector<long long int>& nums, int n) {
   
  //code here        
  
  vector<long long int>v;
  int zero=0;
  long long int mul=1;
  
  for(int i=0;i<n;i++)
      if(nums[i]!=0)
          mul*=nums[i];
      else
          zero++;
  
  if(zero==0)
      for(int i=0;i<n;i++)
          {
          v.push_back(mul/nums[i]);
          }
  
  else if(zero==1)
      for(int i=0;i<n;i++)
      {
      if(nums[i]==0)
         v.push_back(mul);
      else
          v.push_back(0);
      }
  else if(zero>1)
      for(int i=0;i<n;i++)
      {
          v.push_back(0);
      }
      
  return v;
  
}


            `}
        </pre>
<p>There is one more approach that uses log and antilogs</p>

<pre className="code">
  {
    `
x = a * b * c * d

log(x) = log(a * b * c * d)

log(x) = log(a) + log(b) + log(c) + log(d)

x = antilog(log(a) + log(b) + log(c) + log(d))
  
So if we want to remove one element from product , subtract it's log.
 i.e. antilog(log(a) + log(b) + log(c) - log(d))

`
  }
</pre>

<p>More solutions are given <a href="https://www.geeksforgeeks.org/a-product-array-puzzle/">here</a></p>
  
      </div>


    </div>
  );
};

export default ss;
