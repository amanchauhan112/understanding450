import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Sort array according to count of set bits</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are using inbuilt function stable_sort</p>

   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
 static int count_bits(int n)
 {
 int count = 0;
 for (; n; count++)
 n = n & (n - 1);
 
 return count;
 }
 
 static int cmp(int a , int b)
 {
 int i = count_bits(a);
 int j = count_bits(b);
 
 if(i<=j)
 return 0;
 return 1;
 }
 void sortBySetBitCount(int arr[], int n)
 {
     stable_sort(arr,arr+n,cmp); //Normal Sorting may also sort values
                                 //But we want acc to position in array
 }

            `}
        </pre>

<p>Some solutions without inbuilt solution : <a href="https://www.geeksforgeeks.org/sort-array-according-count-set-bits/">here</a></p>

      </div>


    </div>
  );
};

export default ss;
