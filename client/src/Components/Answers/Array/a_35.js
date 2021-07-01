import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Reverse a Linked List</h1><br/>
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
int find_median(vector<int> v)
{
    // Code here.
    
    int n=v.size();
    
    sort(v.begin(),v.end());
    
    if(n%2==0)
        return((v[n/2]+v[(n-2)/2])/2);
    else    
        return v[n/2];
    
}
`
}
</pre>

Here we have median <a href="https://www.geeksforgeeks.org/median-of-two-sorted-arrays/">Median of 2 sorted arrays of same size</a>
    </div>
</div>

  </div>
        </div>
    )
}

export default a
