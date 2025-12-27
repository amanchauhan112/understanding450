import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1>Three way partitioning</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>We will traverse the array and keep two pointers i and j at start and end of array</p>
<p>When we get less than a we swap with arr[i] and if greater than  b swap it with arr[j]</p>

<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void threeWayPartition(vector<int>& array,int a, int b)
{
    // code here 
    
    int n=array.size();
    
    int i=0,j=n-1;

    int mid=0;
    
    while(mid<=j)
    {
        if(a>array[mid])
        {
            swap(array[i],array[mid]);
            i++;
            mid++;
        }
        else if(b<array[mid])
        {
            swap(array[j],array[mid]);
            j--;
        
        }
        else
            mid++;
        
    }
     
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
