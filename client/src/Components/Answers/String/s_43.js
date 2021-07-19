import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Recursively print all sentences that can be formed from list of word lists</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are forming sentences, by using first row as start of sentence.</p>
<p>Iterate for each word in first row.</p>
<p>Add first word of other row and recur for other row's words.If last row, print sentence.</p>

 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
void printUtil(string arr[R][C], int m, int n, string output[R])
    {
        output[m] = arr[m][n];
             
        if (m==R-1)
          {
              for (int i=0; i<R; i++)
                  cout << output[i] << " ";
              return;
          }
             
          for (int i=0; i<C; i++)
              if (arr[m+1][i] != "")
                printUtil(arr, m+1, i, output);
            }
             
void print(string arr[R][C])
{
    string output[R];

    for (int i=0; i<C; i++)
        if (arr[0][i] != "")
          printUtil(arr, 0, i, output);
}           
            `
        }
        </pre>

    </div>


    </div>
  );
};

export default String;