import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Convert a sentence into its equivalent mobile numeric keypad sequence</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>The main trick of this question is the keypad sequence.</p>
<p>Store the sequence in an array (arr[] in below code)</p>
<pre className="code">
  { 
  `
  For eg. A->2
          B->22
          C->222

          arr={2,22,222}

if A is found in input string, add arr[input[i]-'A'] = arr[0] = 2 
  `}
</pre>
<p>Just check character and add index from array to output string</p>
<p>For space in input string , add 0 to output string.</p>

   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
string printSequence(string arr[],string input)
    {

    string output = "";

    int n = input.length();

    for (int i=0; i<n; i++)
    {

    if (input[i] == ' ')
      output = output + "0";

    else
    {
      int position = input[i]-'A';
      output = output + arr[position];
    }
    }

    return output;
}
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;