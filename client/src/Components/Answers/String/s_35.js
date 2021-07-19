import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Minimum characters to be added at front to make string palindrome</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>One approach is to check if string is pallindrome or not and if not count it and remove last element, else return count</p>
        <p>We will solve it by taking help of lps table from KMP Algo:</p>
        <p>LPS table will tell us prefix that is also suffix, so we will first concatenate string to itself using an extra character that will act as delimiter</p>
<p>Now create LPS table, and its last entry will tell us longest prefix i.e. also suffix</p>
<p>String length- this value will be our answer.</p>


 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
//To compute LPS Table

vector<int> computeLPSArray(string str)
{
    int M = str.length();
    
    vector<int> lps(M);
             
    int len = 0;
    lps[0] = 0; // lps[0] is always 0
             
    int i = 1;
    
    while (i < M)
      {
          if (str[i] == str[len])
              {
                  len++;
                  lps[i] = len;
                  i++;
              }
              else
              {
                  // This is tricky. Consider the example.
                  // AAACAAAA and i = 7.
                  
                  if (len != 0)
                  {
                      len = lps[len-1];
             // Also, note that we do not increment i here
                  }
                  else
                  {
                      lps[i] = 0;
                      i++;
                  }
              }
        }
    return lps;
}
             
int getMinCharToAddedToMakeStringPalin(string str)
    {
        string revStr = str;

        reverse(revStr.begin(), revStr.end());
             
        string concat = str + "$" + revStr;
             
        vector<int> lps = computeLPSArray(concat);
             
        return (str.length() - lps.back());
    }
             
            `
        }
        </pre>

    </div>


    </div>
  );
};

export default String;