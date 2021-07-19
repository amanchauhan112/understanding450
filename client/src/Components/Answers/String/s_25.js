import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Boyer Moore Algorithm for Pattern Searching</h1>
      </div>
      <br/>
      <div className="solution">
<p>Check for explanation of Boyer moore's algo <a href="https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/">here</a></p>
        <h1>Optimal Approach :</h1>
<p>First create an array (Bad match table) and initialize last character as * with value = size() of pattern and wherever is it, give its value as size of string.</p>
<p>Now for each character, give its value as length - index -1(other than last character)</p> 
 <p>Now take first window in text of size equal to pattern , match last characters and if not matched and  if character of tex not in array , start from next character else start from incremented by value given in string. </p>
 
 
   <h2>Code</h2>
    <h3>
          T.C:O(n*m)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
void badCharHeuristic( string str, int size,int badchar[NO_OF_CHARS])
{

int i;

for (i = 0; i < NO_OF_CHARS; i++)
    badchar[i] = -1;

for (i = 0; i < size; i++)
    badchar[(int) str[i]] = i;
}

void search( string txt, string pat)
{

  int m = pat.size();
  int n = txt.size();

  int badchar[NO_OF_CHARS];

  badCharHeuristic(pat, m, badchar);

  int s = 0; // s is shift of the pattern with respect to text

  while(s <= (n - m))
  {
      int j = m - 1;


      while(j >= 0 && pat[j] == txt[s + j])
        j--;

      if (j < 0)
      {
        cout << "pattern occurs at shift = " <<  s << endl;
        s += (s + m < n)? m-badchar[txt[s + m]] : 1;
      }

      else
        s += max(1, j - badchar[txt[s + j]]);
  }
}
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;