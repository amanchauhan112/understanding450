import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>First non-repeating character in a stream</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>we will check frequency of elements using array[26]</p>
<p>If greater than 1 then add # else add character to output string</p>
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   
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
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
