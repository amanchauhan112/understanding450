import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find a Fixed Point (Value equal to index) in a given array</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>If array is sorted , we can use Binary Search</p>
<p>Here we are using linear search</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
        vector<int> valueEqualToIndex(int arr[], int n) {
           // code here
           vector<int>v;
           for(int i=0;i<n;i++)
          {
         if(arr[i]==i+1)
          {
          v.push_back(i+1);
           }
          }   
          return v;
       }

            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
