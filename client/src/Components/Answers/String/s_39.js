import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Wildcard string matching</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>We need to check following conditions:</p>
        <p>If curr character is * and string is not ended but second string ended: return false</p>
        <p>If curr character is ? or character matches, check next characters( as ? means one character)</p>
        <p>If character is * and both string not ended, check next character of first with second or next character of second with first.</p>



 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
bool match(char *first, char * second)
    {
        if (*first == '\0' && *second == '\0')
            return true;

        if (*first == '*' && *(first+1) != '\0' && *second == '\0')
            return false;
             
        if (*first == '?' || *first == *second)
            return match(first+1, second+1);

        if (*first == '*')
            return match(first+1, second) || match(first, second+1);
                
        return false;
    }
            `
        }
        </pre>

    </div>


    </div>
  );
};

export default String;