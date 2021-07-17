import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Print all subsequences of a string</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are doing recursive solution</p>
<p>if current not empty : print it</p>
<p>else iterate over string:</p>
<p>add str[i] to a curr variable  and recur for current</p>
<p>After this, decrement size by 1</p>  
  
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
    {
        `
void printSubSeqRec(string str, int n, int index = -1,string curr = "")
{

    if (index == n)
        return;

    if (!curr.empty())    
        cout << curr;
      
    for (int i = index + 1; i < n; i++) 
    {
      curr += str[i];
      printSubSeqRec(str, n, i, curr);

      // backtracking
      //erase all charachters after given value(including it)
      curr = curr.erase(curr.size() - 1);
    }
    return;
}

        `
}
</pre>

Check other solutions <a href="https://www.geeksforgeeks.org/print-subsequences-string/">here</a>
      </div>


    </div>
  );
};

export default String;