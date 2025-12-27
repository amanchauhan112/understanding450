import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>merge 2 sorted arrays</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We will compare last element of arr1 and first of arr2</p>
<p>If arr1[m-1] more than arr2[0] swap them , decrement arr1 pointer and increment arr2 pointer</p>
   
   <p>In the end , sort them</p>
   <h2>Code</h2>

        <h3>
          T.C:O(mlogm+nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

void merge(int arr1[], int arr2[], int n, int m) {
  // code here

  int i=n-1,j=0;
  
  while(i>=0&&j<m)
  {
  
  if(arr1[i]>arr2[j])
  {
      swap(arr1[i],arr2[j]);
  }

  i--;
  j++;

  }
 sort(arr2,arr2+m);
 sort(arr1,arr1+n);
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
