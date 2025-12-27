import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Count pairs with given sum</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Keep storing elements in map and check if difference of curr element nd sum already present or not
    <br/>
    If yes, count it
     </p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int getPairsCount(int arr[], int n, int k) {
    // code here
    
    int count =0;
    
    int i=0,j=1;
    
    map<int,int>mt;
   
    for(i=0;i<n;i++)
    {
            {
                if(mt.find(k-arr[i])!=mt.end())
                count+=mt[k-arr[i]];}
            mt[arr[i]]++;
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
