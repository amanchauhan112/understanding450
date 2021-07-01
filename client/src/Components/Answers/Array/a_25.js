import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Occurence of number greater than n/k times</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Store in map and return number with frequency greater than n/k</p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int countOccurence(int arr[], int n, int k) {
    // Your code here
    
    unordered_map<int,int>mt;
    int count=0;
    
    for(int i=0;i<n;i++)
        mt[arr[i]]++;
    
    for(int i=0;i<mt.size();i++)
    {
        if(mt[i]>n/k)
               count++;
    }
    
    return count;
    
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
