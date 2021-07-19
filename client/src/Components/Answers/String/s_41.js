import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Transform One String to Another using Minimum Number of Given Operation</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>We can ont pick character of A and put it in front.</p>
        <p>First check if both string have same character or not.</p>
<p>If same, iterate over strings from back, when character match decrement both iterators, else only decrement iterator of A and increment counter(bcz we are making b from a so if mismatch , that means character need to be moved to front in A,so, decrement iterator of A).</p>

 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
int minOps(string& A, string& B)
  {
      int m = A.length(), n = B.length();
             
      if (n != m)
          return -1;

      int count[256];

      memset(count, 0, sizeof(count));

      for (int i=0; i<m; i++) 
          count[A[i]]++;

      for (int i=0; i<n; i++) 
          count[B[i]]--;      

      for (int i=0; i<256; i++)   // Check if all counts become 0
          if (count[i])
              return -1;
             
      int res = 0;
      
      for (int i=n-1, j=n-1; i>=0; )
        {
            while (i>=0 && A[i] != B[j])
            {
                i--;
                res++;
            }

            if (i >= 0)
            {
                  i--;
                  j--;
            }
        }

      return res;
  }
            `
        }
        </pre>

    </div>


    </div>
  );
};

export default String;