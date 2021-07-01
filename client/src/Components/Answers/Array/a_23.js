import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Find maximum product subarray </h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Here,we will keep multiplying from one side</p>
<p>Whenever a negative number , we will swap min and max</p>
<p>So that if negative number come again, we will get our max back after swapping.</p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
long long maxProduct(int *arr, int n) {
    // code here
    
     long  currmax=arr[0],currmin=arr[0];
     long  finalmax=arr[0];
   
    for(int i=1;i<n;i++)
    {   

        if(arr[i]<0)
            swap(currmax,currmin);
            
        currmax=max<long int>(arr[i],arr[i]*currmax);
        currmin=min<long int>(arr[i],arr[i]*currmin);
        finalmax=max(currmax,finalmax);

    }
   
    return finalmax;
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
