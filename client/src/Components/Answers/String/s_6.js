import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check if a string is a valid shuffle of two distinct strings</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

   {/* <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3> */}

        <pre className="code">
    {
        `
        We have two small strings , and one big string
        We need to check if third string combination of first two or not.

        Sort all strings and set iterators on all three.

        If str1[i]==str3[k] : i++
        If str2[j]==str3[k] : j++

        If both condition fails, return false.
        `
}
</pre>
      </div>


    </div>
  );
};

export default String;