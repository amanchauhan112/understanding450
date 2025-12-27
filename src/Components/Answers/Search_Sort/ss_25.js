import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Allocate minimum number of pages</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

        <p>First we need to giv each student min possible , then return max among all given number of pages</p>

   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

bool isValid(int arr[], int n, int m, int max) 
{

    int student = 1; // 1st student
    int sum = 0; // total pages student have
    
    for(int i = 0; i < n; i++) 
    {
        sum += arr[i];
        
        if(sum > max) 
            {
            student++;
            sum = arr[i];
            }
        
        if(student > m)
           return false;
    }
    
    return true;
    
}

int findPages(int arr[], int n, int m) 
{ 
if(n<m)
return -1;

int low=-1,high=0,mid,res=-1;

for(int i=0;i<n;i++)
{
    low=max(low,arr[i]);
    high+=arr[i];
}



while(low<=high)
{
mid=low+(high-low)/2;

if(isValid(arr,n,m,mid))
    {
        res=mid;
        high=mid-1;
    }
else
    low=mid+1;
}

return res;

}
            `}
        </pre>
<p>Check this video for detailed explanation:</p>

<iframe style={{borderRadius:"20px"}} width="502" height="282" src="https://www.youtube.com/embed/2JSQIhPcHQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

      </div>


    </div>
  );
};

export default ss;
