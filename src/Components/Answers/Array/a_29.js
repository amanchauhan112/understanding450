import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Trapping rain water</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>First we are checking from left the highest bar till arr[i] , store it in leftMax array</p>
<p>Similarly, we are checking from right the highest bar till arr[i] , store it in rightMax array</p>
<p>Now the water lvl will be equal to lower height bar, so add (that height - height of current bar) to water for each bar.</p>
<p>Last step is done as water will not go into the bar(WAll), So we remove height of wall and height of total water level </p>

<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int main() {
	    int n;
	    cin>>n;
	    
	    int h[n];
	    
	    for(int i=0;i<n;i++)
	        cin>>h[i];              //heights of bars
	    
	    int leftMax[n],rightMax[n];
	    
	    int lmax=h[0];
	    for(int i=0;i<n;i++)
	    {
	        if(h[i]>lmax)
	            lmax=h[i];
	        
	        leftMax[i]=lmax;
	    }
	    
	    int rmax=h[n-1];
	    for(int i=n-1;i>=0;i--)
	    {
	        if(h[i]>rmax)
	            rmax=h[i];
	        
	        rightMax[i]=rmax;
	    }
	    
	    int water=0,maxWater=0;
	    int wall;
	    
	    for(int i=0;i<n;i++)
	    {
	        if(leftMax[i]<rightMax[i])
	            wall=leftMax[i];
	        else
	            wall=rightMax[i];
	        
	        water=water+wall-h[i];

	    }
	    
	    cout<<water<<endl;
	    
        return 0;
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
