import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Rabin-Karp Algorithm for Pattern Searching</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>In Rabin Karp algo  , we take the help of hash value.</p>
<p>Calculate hash value of pattern , and also for sting of size of pattern in string</p>
<p>If hash value matches , then check if complete pattern matche with string.</p>
<p>Else: move the window, change hash value by adding leading character and removing previous character.</p>

   <h2>Code</h2>
    <h3>
          T.C:O(n*m)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
  void search(char pat[], char txt[], int q)
  {
      int M = strlen(pat);
      int N = strlen(txt);
      int i, j;
      int p = 0; // hash value for pattern
      int t = 0; // hash value for txt
      int h = 1;
             
      // h = "pow(d, M-1)%q"
      for (i = 0; i < M - 1; i++)
           h = (h * d) % q;
             
      // Calculate hash value of pattern and first window of text
  
      for (i = 0; i < M; i++)
      {
          p = (d * p + pat[i]) % q;
          t = (d * t + txt[i]) % q;
      }
    
      // Slide the pattern over text one by one

      for (i = 0; i <= N - M; i++)
      {
          if ( p == t )
           {
              for (j = 0; j < M; j++)
               {
                   if (txt[i+j] != pat[j])
                       break;
               }
    
              if (j == M)
                  cout<<"Pattern found at index "<< i<<endl;
           }
             
         if ( i < N-M )
          {
              t = (d*(t - txt[i]*h) + txt[i+M])%q;

              if (t < 0)
                t = (t + q);
          }
      }
  }
            `
        }
        </pre>
    </div>


    </div>
  );
};

export default String;