import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Arithmetic Number</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Missing Number : <a href="https://www.geeksforgeeks.org/find-missing-number-arithmetic-progression/">link</a></p>
 <p>First we will find the diff of AP</p> 
  <p>
      diff = (arr[n - 1] - arr[0]) / n;
  </p>
<h3>We need to check following Conditions:</h3>
<p>The element just after the middle element is missing.</p>
 <p>The element just before mid is missing</p>
  <p>If the elements till mid follow AP, then recur for right half else left half</p>
  
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

        //To check if B is in A.P.:

        // a+(n-1)d=ai
        
        if(!C)
            return A==B; 
        return((B-A)%C==0&&(B-A)/C>=0);
  

//Missing Number:

int findMissingUtil(int arr[], int low,int high, int diff)
{

// There must be two elements to find the missing

  if (high <= low)
    return INT_MAX;


  int mid = low + (high - low) / 2;

  if (arr[mid + 1] - arr[mid] != diff)
    return (arr[mid] + diff);

  if (mid > 0 && arr[mid] - arr[mid - 1] != diff)
    return (arr[mid - 1] + diff);


  if (arr[mid] == arr[0] + mid * diff)
    return findMissingUtil(arr, mid + 1,high, diff);

  return findMissingUtil(arr, low, mid - 1, diff);
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
