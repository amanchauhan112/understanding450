import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Min Number of Flips</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We will count min of starting string from 0 and starting string from 1.</p>
<p>Just chek if curr character expected character , and then flip it.</p>

   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
            char flip(char x)
            {
                if(x=='0')
                    return '1';
                else
                    return '0';
            }
            
            int countFlip(string str,char expected)
            {
                
            int n=str.length();

            int count=0;
            
            for(int i=0;i<n;i++)
            {
                if(str[i]!=expected)
                    count++;
                    
                expected=flip(expected);
            }
            
            return count;
            }
            
            int result(string str)
            {
            
               return min(countFlip(str,'0'),countFlip(str,'1'));
            }
            
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;