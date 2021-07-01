import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Array Subset of another array or not </h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Use map to store elements of one array</p>
<p>Check if 2nd array elements are present already or not.</p>
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
	    string answer="";
	    bool subset=true;
	    map<int,int>mt;
	    
	    int m,n;
	    cin>>m>>n;
	    
	    int arr1[m],arr2[n];
	    
	    for(int i=0;i<m;i++)
	        {
	            cin>>arr1[i];
	            mt[arr1[i]]++;
	        }
	        
	        int i=0;
	        
	      	    for(i=0;i<n;i++)
	        {
	            cin>>arr2[i];
	            mt[arr2[i]]++;
	        }  
	        i=0;
	    while(subset&&i<n)
        {

	        if(mt[arr2[i]]<2)
	            subset=false;
	            
	           i++;
	        }
	    
	      
	     if(subset) 
	        answer="Yes";
	     else
	        answer="No";
	        
	    cout<<answer<<"\n";
	}
	return 0;
}
`
}
</pre>
<p>There are more approaches as given <a href="https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/" >here</a></p>

    </div>
</div>

  </div>
        </div>
    )
}

export default a
