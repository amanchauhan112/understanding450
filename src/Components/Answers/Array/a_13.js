import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1>Kadane's Algorithm </h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int maxSubarraySum(int arr[], int n){
    
    // Your code here
    
    // bool positive=false;
    
    // for(int i=0;i<n;i++)
    //     {
    //     if(arr[i]>0)
    //         positive=true;
    //     }
    
    // if(!positive)
    //     return -1;
    
    int finalsum=0;
    
    // for(int i=0;i<n;i++)
    //     finalsum+=arr[i];
    
    int i=0;
    
    int sum=0;
    
    while(i<n)
    {
    sum+=arr[i];
    
    if(sum<0)
        sum=0;
    
    if(sum>finalsum)
        finalsum=sum;
        
    i++;
    }
    
    return finalsum;
}
`
}
</pre>


    </div>
</div>

  </div>
        </div>
    )
}

export default a
