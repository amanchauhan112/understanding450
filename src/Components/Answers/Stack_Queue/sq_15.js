import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Sort a stack using recursion</h1>
      </div>

<br/>
      <div className="solution">

      <h1>Optimal Approach :</h1>
<p>First we will recursively pick all elements(as done in sort function )</p>
<p>Now in another funtion (i.e. sort2):</p>
If stack is empty or top element less than element we are inserting : push ele<br/>
Else : recursively pick all elements till above condition doesn't fulfill. 
Then push all elements again.
        <h2>Code</h2>

        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3> */}

        <pre className="code">
          {`
    void sort2(stack<int>&s2,int a)
    {
        if(s2.empty()||s2.top()<=a)
        {
            s2.push(a);
            return;
        }

        int b=s2.top();
        s2.pop();
        
        sort2(s2,a);

        s2.push(b);
        
    }
    
    void SortedStack :: sort()
    {
  
       if(s.size()==1)
       {
           return;
       }
     
       int a=s.top();
       s.pop();
       
       sort();

       sort2(s,a);
      }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
