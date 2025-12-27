import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>The Painter's Partition Problem</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>It's again similar to other problems of Advance Binary Search</p>
  <p>Here, max a painter can get is sum of array i.e. all wood , and lowest can get is max element of array</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
bool isMin(int arr[],int n,long long minPaint,int k)
{
    int painter=1;
    
    int sum=0;
    
    for(int i=0;i<n;i++)
    {
        
     sum+=arr[i];
     
     if(sum>minPaint)
     {
         painter++;
         sum=arr[i];
     }
     
     if(painter>k)
     {
         return false;
     }
     
    }
    
    
    return true;
}

long long minTime(int arr[], int n, int k)
{
    // code here
    // return minimum time
    
    
    long long  low=0,high=0;
    
    for(long long  i=0;i<n;i++)
    {
        if(arr[i]>low)
            low=arr[i];
            
        high+=arr[i];
    }
    
    long long  ans=0;
    
    while(low<=high)
    {
        
        long long mid=low+(high-low)/2;
        
        // cout<<low<<mid<<high<<" ";
        
        if(isMin(arr,n,mid,k))
            {
                ans=mid;
                high=mid-1;
            }
        else
            low=mid+1;
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
