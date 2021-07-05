import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>First and last occurrences of x</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We can simply do this by traversing</p>
<p>But we will do this in logN time i.e. Binary search</p>

<p>We are using two while loops <br/>One for first occurrence and second for second occurrence</p>

   <h2>Code</h2>

        <h3>
          T.C:O(logn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

vector<int> find(int arr[], int n , int x )
{
    // code here
    
    vector<int>v;
    
    int left=0,right=n-1,mid;
    
    int first=-1,second=-1;
    
    while(left<=right)
    {
        mid=(left+right)/2;
        
        if(arr[mid]==x)
        {
            first = mid;
            right=mid-1;
        }
        
        else if(arr[mid]<=x)
            left=mid+1;
        else 
            right=mid-1;
        
    }
    
     left=0;
     right=n-1;
    
    while(left<=right)
    {
        mid=(left+right)/2;
        
        if(arr[mid]==x)
        {
            second = mid;
            left=mid+1;
        }
        
        else if(arr[mid]<x)
            left=mid+1;
        else 
            right=mid-1;
        
    }
    
    v.push_back(first);
    v.push_back(second);
    
    return v;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
