import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Merge 2 sorted arrays without using Extra space.</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<h2>Code</h2>
<h3>
T.C:O(m+n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void merge(int arr1[], int arr2[], int n, int m) {
    // code here

    int i=n-1,j=0;
    
    while(i>=0&&j<m)
    {
    
    if(arr1[i]>arr2[j])
    {
        swap(arr1[i],arr2[j]);
    }

    i--;
    j++;
  
    }
   sort(arr2,arr2+m);
   sort(arr1,arr1+n);
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
