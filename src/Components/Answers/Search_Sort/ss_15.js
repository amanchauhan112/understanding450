import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Print all subarrays with 0 sum</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First make freq of 0 as 1 in map</p>
<p>For complete array,wwe will use unordered map as: </p>
<p>Keep track of sum , and increment frquency of sum</p>
<p>Increment count by map[sum]-1</p>
<p>Now this will wors because, if sum is 0 ,i.e. we have 0 element till now , and we are counting subarrays possible with them</p>
<p>When sum become more than 0 so frequency will be 1 for sum till 0 is not encountered</p>
<p>When frequency is 1 i.e. count is incremented by 1-1=0 so no increment</p>
<p>When 0 is encountered , frequency of sum will become 2 or more</p>
<p>So , at that time , again count will be incremented will all possible subarrays</p>


   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
ll findSubarray(vector<ll> arr, int n ) {
  //code here
  
ll count=0;

unordered_map<int,int>mt;

int sum=0;

mt[0]=1;

int i=-1;

while(i<n)
{
  i++; 
  if(i<n)
  {sum+=arr[i];
  
  mt[sum]++;
  
  if(mt[sum]>=1)
      count+=mt[sum]-1;
  }
}
  
return count;
  
}


            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
