import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Search in a rotated sorted array</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First we will find smallest number/rotation point of array</p>
<p>If last number less than target, search in left of point , else search in right including point</p>
   
   <h4>(Use Binary Search)</h4>
   <h2>Code</h2>

        <h3>
          T.C:O(logn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
 int search(vector<int>& nums, int target) {
  int n=nums.size();
      int lo=0,hi=n-1;

  // find the index of the smallest value using binary search.

  while(lo<hi){
      int mid=(lo+hi)/2;
      if(nums[mid]>nums[hi]) lo=mid+1;
      else hi=mid;
  }
  
  // lo==hi is the index of the smallest value and also the number of places rotated.

  int rot=lo;
  lo=0;hi=n-1;
 
  // The usual binary search and accounting for rotation.
 
if(nums[n-1]<target)
{
    hi=rot-1;
}
else
{
    lo=rot;
}

while(lo<=hi)
{
    int mid=(lo+hi)/2;
    
    if(nums[mid]==target)
        return mid;

    if(nums[mid]<target)
            lo++;
    else
        hi--;
}

  return -1;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
