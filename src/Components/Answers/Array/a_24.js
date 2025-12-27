import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Find longest consecutive subsequence</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>First we will find largest number in array.</p>
<p>Then we make a=vector of length equal to largest number AND INITIALIZE AS 0</p>
<p>We will add frequency of numbers we have</p>
<p>Then, simply, we will increment counter till consecutive number nad store it in max if greator than max</p>
<p>make counter 0 when our loop breaks.</p>

<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int findLongestConseqSubseq(int arr[], int N)
{
  //Your code here
 
  int max=0,count=0,maximum=0;
  
  for(int i=0;i<N;i++)
    {
      
        if(maximum<arr[i])
            maximum=arr[i];
    }
    
  vector<int>v(maximum+1,0);
  
    for(int i=0;i<N;i++)
    {
        v[arr[i]]=1;
    }
  int i=0;
  
  while(i<=maximum)
  {
    i++;

    while(v[i]>0&&i<=maximum)
        {
            count++;
            i++;
        }
   
    if(count>max)
        max=count;
    
    count=0;
        
  }
  
  return max;
  
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
