import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Triplet sum in array</h1><br/>

    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Three pointer Approach :</h1>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int main() {
	//code
	
	int t;
	cin>>t;
	while(t--)
	{
	    int n,x;
	    cin>>n>>x;
	    
	    int a[n];
	    
	    for(int i=0;i<n;i++)
	        cin>>a[i];
	        
	    if(n<3)
	    {
	        cout<<0<<endl;
	        
	    }
	    else
	    {
	    int ans=0;
	    
	    sort(a,a+n);   
	    
	    for(int i=0;i<n-2;i++)
	    {
            int j=i+1;
            int k=n-1;
            while(j<k&&ans==0)
            {
            while(k>j)
            {
                if((a[i]+a[j]+a[k])==x)
                    ans=1;
               k--;
                
            }
            k=n-1;
            j++;
            }
	   
	    }    
	   
	    cout<<ans<<endl;
	    }
	}

	return 0;
}
`
}
</pre>

<h1>Another Approach</h1>
<p>
 We can store all elements in map  and now use two pointers i and j  
<br/>
Check it using array , if X-arr[i]-arr[j] exist in map ={">"} return ;
</p>

    </div>
</div>

  </div>
        </div>
    )
}

export default a
