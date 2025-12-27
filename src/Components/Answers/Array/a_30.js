import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Chocolate Distribution Problem</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>We are simply going to check difference of elements in window of size equal to <strong>m</strong></p>
<p>We are first sorting it and then find min diff. between <strong>i</strong>th and <strong>(m-1)</strong>th element</p>
<h2>Code</h2>
<h3>
T.C:O(nlogn)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
    //We have n numbers of packets in a[n] 
    //and m number of students
 
	    sort(a,a+n);
	    
	    int i=0,j=0;
	    int num=m-1;


	   int mindiff=999999999;
	   
	   while(num<n)
	   {
	       int diff=a[num]-a[i];
	       
	       if(mindiff>diff)
	           mindiff=diff;
	       i++;
	       num++;
	       
	   }

	    
	    cout<<mindiff<<endl;
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
