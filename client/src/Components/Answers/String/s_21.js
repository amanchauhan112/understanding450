import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Count the Reversals </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First count pairs present in correct order in string ("good" in below code)</p>
<p>Count number of open and close bracket not in correct order</p>
 
 <p>If open and close, any one is odd increment their count </p>
 <p>In the end, return sum of ceil of their half.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
    </h3>

        <pre className="code">
        {
            `
if(n.length()%2!=0)
    cout<<-1;
            
else
  {
      stack<int>s;
        
      int i=0,good=0;
        
      while(n[i]!='\0')
      {
        if(n[i]=='{')
          s.push('}');
        else if(!s.empty()&&n[i]==s.top())
            {
              s.pop();
              good++;
            }	  
        i++;
      }
        
      i=0;
        

      int open=0,close=0;
        

      while(n[i]!='\0')
      {    
        if(n[i]=='{')
            open++;
        else 
            close++;  
        i++; 
      }
        

      open=open-good;
      close=close-good;
               

      if(open%2!=0)
        open++;
      if(close%2!=0)
        close++;
        

      cout<<ceil(open/2)+ceil(close/2);

  }         
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;