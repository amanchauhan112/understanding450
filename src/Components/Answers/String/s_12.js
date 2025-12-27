import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Split the binary string into substrings with equal number of 0s and 1s</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Keep counting 0 and 1 and when they become equal,count it as final answer</p>
<p>If final answer is 0, return -1 (i.e. not found)</p>


   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
            int maxSubStr(string str, int n)
            { 
                int count0 = 0, count1 = 0;
             
                // To store the count of max substrings str can be divided into

                int cnt = 0;

                for (int i = 0; i < n; i++) 
                {
                    if (str[i] == '0') 
                      count0++;
                    else 
                      count1++;
                    
                    if (count0 == count1) 
                    {
                        cnt++;
                    }
                }

                if (cnt == 0) 
                    return -1;
                
                return cnt;
            }
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;