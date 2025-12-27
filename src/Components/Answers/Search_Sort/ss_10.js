import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find a pair with the given difference</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We can store in map and find X-arr[i] present in map or not , but that takee O(n) space</p>
   <p>Here, we will sort and keep track of difference between two pointer starting from first 2 indexes</p>
   <p>If difference is less than X , increment 2nd pointer else first pointer</p>
   
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
bool findPair(int arr[], int size, int n)
{
    int i = 0;
    int j = 1;
 
    while (i < size && j < size)
    {
        if (i != j && arr[j] - arr[i] == n)
        {
            cout << "Pair Found: (" << arr[i] << ", " << arr[j] << ")";
            return true;
        }
        else if (arr[j]-arr[i] < n)
            j++;
        else
            i++;
    }

    return false;
}

            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
