import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Parenthesis Checker</h1>
      </div>
<br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Keep pushing pair of curr element of array and increment count</p>
<p>when element same as top of stack,pop stack and decrement count</p>  
<p>In the end is tack not emty or count not equal to zero : return 0, else : return 1</p>  

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
 bool ispar(string x)
 {
     // Your code here
     stack<char>s;
     int count=0;
    
     for(int i=0;i<x.length();i++)
     {
         
         if(x[i]=='{')
         {
             s.push('}');
             count++;
         }
         else if(x[i]=='(')
         {
             
             s.push(')');
                count++;
         }
         else if(x[i]=='[')
         {
             s.push(']');
                count++;
             
         }
         
         if(x[i]=='}'||x[i]==')'||x[i]==']')
         {
           
             count--;
         }
        
        
         if(s.size()>0&&x[i]==s.top())
             s.pop();
     }
     
      if(count!=0||s.size()>0)
         return 0;
         
     return 1;
 }

 
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
