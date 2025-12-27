import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Smallest subarray with sum greater than x </h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Keep track of sum a in window from left to right pointer</p>
<p>If sum goes greter than x , save size if minimum and move window</p>

<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
            //x is given sum
            int a[n];
	    int minsize=99999999;
	    
	    for(int i=0;i<n;i++)
	        {
	        cin>>a[i];
	        
	        if(a[i]>x)
	            minsize=1;
	        }
	    
	    int currsum=0,left=0,right=0;
	    
	    int subsize=0;
	    
	    while(right<n&&minsize!=1)
	    {   

            //our subarray with sum greater than x

	        while(currsum<=x&&right<n)
	        {
	            currsum+=a[right];
	            right++;
	            subsize++;
	        }
	       
                //if size of subarray < min size , minsize=subarray size

	        if(subsize<minsize)
	            minsize=subsize;
	        
             //decrease subarray size using left pointer

	        currsum-=a[left];
	        subsize--;
	        left++;
	        
	    }
	    
	    cout<<minsize<<endl;
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
