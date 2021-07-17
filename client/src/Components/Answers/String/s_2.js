import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Pallindrome String</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
    {
        `
        int isPlaindrome(string S)
        {
            // Your code goes here
            
            int i=0,j=S.length()-1;
            while(i<j)
               { 
                   if(S[i]!=S[j])
                    return 0;
                   i++;
                   j--;
               }
                   
           return 1;
        }
        `
}
</pre>
      </div>


    </div>
  );
};

export default String;