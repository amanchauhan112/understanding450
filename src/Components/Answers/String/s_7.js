import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Count and Say problem</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>For 0 , return empty string and for 1 return string res(i.e. 1)</p>
   <p>For more than 1, we will increment counter till all 1 counted, then add it to string.</p>
   
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
    {
        `
  string countAndSay(int n) 
  {
    if (n == 0) return "";
    
    string res = "1";
    
    while (--n) 
    {
        string cur = "";

        for (int i = 0; i < res.size(); i++) 
        {
            int count = 1;

            while ((i + 1 < res.size()) && (res[i] == res[i + 1]))
            {
                count++;    
                i++;
            }
            cur += to_string(count) + res[i];
         }
         res = cur;
     }    
         
     return res;
           
     }
        `
}
</pre>
      </div>


    </div>
  );
};

export default String;