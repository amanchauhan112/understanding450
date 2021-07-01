import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Find if there is any subarray with sum equal to 0</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Here the idea is:</p>
<p>We will keep adding elements from one side , If
    sum repeats, that means there is an array that is equal to 0
</p>
<p>else no such array.</p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(n)
</h3>
<pre className="code">
{
`
bool subArrayExists(int arr[], int n)
{
    //Your code here
    
    bool ans=0;
    
    int s=0,i=0;    //1.make sum array 2.Check if any sum repeats. 
    
    unordered_map<int,int>mt;
    
    while(ans==0 && i<n)
    {
        s=s+arr[i];
        
        mt[s]++;
        
        if(mt[s]>1)
            ans=1;
        
        if(s==0)
            ans=1;
            
        i++;

    }
    
    return ans;
    
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
