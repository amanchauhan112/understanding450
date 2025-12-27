import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Next Permutation</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>first we will ensure that given vector is not in descending order</p>
<p>If descending , reverse and return </p>
<p>else: find first largest from back (lb) and then number smaller than lb from that index of lb</p>
<p>Swap them and then reverse the array after swapped index.</p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void nextPermutation(vector<int>& nums) {
     
    int n=nums.size();
    bool decreasing=false;
    int k=0;
    while(!decreasing&&k<n-1)
    {
            if(nums[k]<nums[k+1])
                    decreasing=true;
            
            k++;
    }
    
    int  i=n-2,j=n-1; 
    
    if(decreasing&&i<n&&j>0)
    {    
                 
       while(nums[i]>=nums[i+1]&&i>0)
           i--;
           
       while(nums[i]>=nums[j]&&j>0)
            j--;
       
       swap(nums[i],nums[j]);
            
          j=n-1;
          i++;
    }
       while(i<j)
            {
                swap(nums[i],nums[j]);
                j--;   
                     i++;
   
}

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
