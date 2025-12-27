import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>square root of an integer</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>In Below code , we are checking square of number which is equal to n and return it.</p>
 <p>We can also use low=0 and high=n and do binary search for same</p>
 
   <h2>Code</h2>

        <h3>
          T.C:O(√n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
  int countSquares(int N) {
    // code here

    int n=1,count=0;
    
    while(n*n<N)
    {
        count++;
        n++;
    }
    return count;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
