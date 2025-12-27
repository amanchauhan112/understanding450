import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Find the first non-repeating character from a stream of characters</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Keep track of frequency of character</p>
  <p>If more than 1:add #, else: add character </p>

    <h2>Code</h2>
<h3>
T.C:O(26*n)<br/>
S.C:O(26)
</h3>
<pre className="code">
{
`
string FirstNonRepeating(string A){
    // Code here

    int arr[26]={0};
    string ans="";
    queue<char>q;
    
    for(int i=0;i<A.length();i++)
    {
        
       q.push(A[i]);
       
       arr[A[i]-'a']++;
       
       while(!q.empty())
       {
       if(arr[q.front()-'a']>1)
            q.pop();
        else
            break;
       }    

      if(q.empty())
        ans+='#';
       else
        ans+=q.front();
            
    }
    
    
    return ans;
    
    
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
