import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find the string in grid</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Check for each charachter in grid.</p>
<p>Now check for all 8 directions and if any conditions fails, word length won'b be correct so return false.</p>

   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `

// row and col are 0 to n and 0 to m

int x[] = { -1, -1, -1,  0, 0,  1, 1, 1 };
int y[] = { -1,  0,  1, -1, 1, -1, 0, 1 };

bool search2D(char *grid, int row, int col,string word, int R, int C)
{
   // If first character of word doesn't match.

   if (*(grid+row*C+col) != word[0])
       return false;

   int len = word.length();

   // Search word in all 8 directions

   for (int dir = 0; dir < 8; dir++) 
   {
       // Initialize starting point for current direction

       int k, rd = row + x[dir], cd = col + y[dir];

       // First character is already checked so :

       for (k = 1; k < len; k++) {

           if (rd >= R || rd < 0 || cd >= C || cd < 0)
               break;

           if (*(grid+rd*C+cd) != word[k])
               break;

           rd += x[dir], cd += y[dir];
       }

       if (k == len)
           return true;
   }
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