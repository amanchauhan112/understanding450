import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Expression contains redundant bracket or not</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>First keep pushing characters into stack till ch[i] != ')'</p>
<p>If ch[i] is a closing bracket ')' , then:</p>
<p>Keep popping top till top != '(' and also check if operator is present </p>
<p>Now, if '(' not found an stack gets empty :  that means brackets are redundant , i.e. return true.</p>
<p>If we found '(' and also an operator , that means bracket are not redundant, so keep traversing</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
    bool checkRedundancy(string& str)
    {
        stack<char> st;
     
        for (auto& ch : str) {
     
            if (ch == ')') 
            {
                char top = st.top();
                st.pop();
     
                bool flag = true;
     
                while (!st.empty() and top != '(') 
                      {
     
                    if (top == '+' || top == '-' || top == '*' || top == '/')
                        flag = false;
     
                    top = st.top();
                    st.pop();
                       }
     
                // If operators not found
                if (flag == true)
                    return true;
            }
     
            else
                st.push(ch);
        }
        return false;
    }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
