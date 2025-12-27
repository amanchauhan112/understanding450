import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>K-th element of two sorted Arrays</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Basic idea is to merge both arrays and print kth element</p>
  <p>Here , we are using <a href="/ss_14">merge technique of O(1) space</a></p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
int kthElement(int arr1[], int arr2[], int n, int m, int k)
{
    int i=n-1;
    int j=0;
    
    while(i>0&&j<m)
        {
            if(arr1[i]>arr2[j])
                {
                  swap(arr1[i],arr2[j]);
                  j++;
                }
            i--;
        }
   
    
    sort(arr1,arr1+n);
    sort(arr2,arr2+m);

    if(k<=n)
        return arr1[k-1];
    else
        return arr2[k-n-1];
        
    
        
}

            `}
        </pre>
<p>Check different Approaches <a href="https://www.geeksforgeeks.org/k-th-element-two-sorted-arrays/">here</a></p>
      </div>


    </div>
  );
};

export default ss;
