import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Best time to buy and Sell stock</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>It is related to Kadane's algorithm</p>
<p>We need to find max difference in contiguous subarray</p>
<p>So we will keep track of max diff , if goes below 0 , make it 0</p>
<p>else keep making it max diff if greater than previous max diff.</p>



<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int maxProfit(vector<int>& prices) {
        
    int i=0;
    
    int n=prices.size();
    
    while(i<n-1 && prices[i]>=prices[i+1])
        i++;
    
    if(i==n-1)
        return 0;
    
int min=INT_MAX,max_profit=0;
    while(i<n)
    {
            if(prices[i]<min)
                    min=prices[i];
            if(prices[i]-min>max_profit)
                    max_profit=prices[i]-min;
            
            i++;
    }
            
    return max_profit;
    
    
    
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
