import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Reverse a String</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Start from 0 and n-1 as beg and end</p>
<p>Swap beg and end till mid.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

    <pre className="code">
        {
            `
            void reverseString(vector<char>& s) {
            
                int i=0,j=s.size()-1;
                    while(i<j)
                    {
                            
                            char temp=s[i];
                            s[i]=s[j];
                            s[j]=temp;
                            i++;
                            j--;
                    }
            
        }
            `
    }
    </pre>

      </div>


    </div>
  );
};

export default String;