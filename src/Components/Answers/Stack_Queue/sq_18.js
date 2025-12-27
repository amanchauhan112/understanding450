import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Length of the longest valid substring</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>We already know approach using stack</p>
<p>But here, we are going to use O(1) approach.</p>
<p>Idea is to count left (i.e. "(") and right (i.e. ")")</p>
<p>Whenever left equal to right, count twice of them</p>
<p>If right {">"} left , make them 0 as it is invalid string</p>
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
    int solve(string s, int n)
    {
     
      int left = 0, right = 0, maxlength = 0;
     
        for (int i = 0; i < n; i++)
        {
            if (s[i] == '(')
                left++;
            else
                right++;
     
          if (left == right)
                maxlength = max(maxlength, 2 * right);

            else if (right > left)
                left = right = 0;
        }
     
        left = right = 0;
     
        // Iterating the string from right to left
        for (int i = n - 1; i >= 0; i--) {
     
            if (s[i] == '(')
                left++;
            else
                right++;

            if (left == right)
                maxlength = max(maxlength, 2 * left);

            else if (left > right)
                left = right = 0;
        }
        return maxlength;
    }
    
            `}
        </pre>

        <h2>Imp:</h2><p>Left and right both traversal are important for cases like this:  <h2>((())</h2></p>
      <p>Where left brackets are greater than right </p>
      </div>
    </div>
  );
};

export default sq;
