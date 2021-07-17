import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check if strings are rotations of each other</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>Check if size are equal or not.If not equal return false.</p>
<p>Concatenate string 1 to itself.Then check if rotated string can be found in it or not.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>
        <pre className="code">
    {
        `
bool areRotations(string str1, string str2)
{
   if (str1.length() != str2.length())
        return false;
  
    string temp = str1 + str1; 
    return (temp.find(str2) != string::npos);
}
        `
}
</pre>

      </div>


    </div>
  );
};

export default String;