import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Search word in a grid</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Here,create a matrix of same size, add first element and count it</p>
<p>find it in grid. Now , check its above , below, left and right characters , and as they matches count them</p> 
 <p>In the end, return count.(found used in below code)</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n^2)
          <br />
          S.C:O(n^2)
    </h3>

        <pre className="code">
        {
            `
int internalSearch(string needle, int row,int col, string hay[],
              int row_max, int col_max, int xx)
{
int found = 0;

if (row >= 0 && row <= row_max && col >= 0 &&
   col <= col_max && needle[xx] == hay[row][col])
{
   char match = needle[xx];
   xx += 1;

   hay[row][col] = 0;

   if (needle[xx] == 0)
   {
       found = 1;
   }
   else
   {
       found += internalSearch(needle, row,col + 1, 
                               hay,row_max, col_max,xx);
       found += internalSearch(needle, row, col - 1,
                               hay, row_max, col_max,xx);
       found += internalSearch(needle, row + 1, col,
                               hay, row_max, col_max,xx);
       found += internalSearch(needle, row - 1, col,
                               hay, row_max, col_max,xx);
   }
   hay[row][col] = match;
}
return found;
}
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;