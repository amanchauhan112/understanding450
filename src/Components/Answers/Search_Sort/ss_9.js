import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Searching in an array where adjacent differ by at most k</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>As max difference between adjacent elements is given,we will use it to make our solution efficient </p>
<p>We will do traversal normally , but our pointer will increase by max(1, abs(arr[i]-x)/k)</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

int search(int arr[], int n, int x, int k)
{

    int i = 0;
    while (i < n)
    {
        if (arr[i] == x)
            return i;
 
        // We use max here to make sure that i moves at-least one step ahead.
     
        i = i + max(1, abs(arr[i]-x)/k);
    }

    return -1;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
