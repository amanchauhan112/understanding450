import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Longest Prefix Suffix</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are using concept of pi table from KMP.</p>
<p>Create an vector and initialize it as 0.</p>
<p>Using two pointers , if they are equal , increment them and store j+1 on vector[i]</p>
<p>Else: increment i if j not incremented else fo to [j-1]th value of vector</p>


   <h2>Code</h2>
    <h3>
          T.C:O(m+n)
          <br />
          S.C:O(n)
    </h3>

        <pre className="code">
        {
            `
int lps(string s)
{
    vector<int> A(s.size(), 0);
    int j = 0, i = 1;
            
    while (i < s.size())
    {
        if (s[i] == s[j])
        {
            A[i] = j + 1;
            j++;
            i++;
        }
        else
        {
            if (j == 0)
              i++;
            else
              j = A[j - 1];
        }
    }
            
    return A.back();             
}
            `
        }
        </pre>
More explanation given <a href="https://www.geeksforgeeks.org/longest-prefix-also-suffix/">here</a>
        <h2>Also Check out this explanation:</h2>
 
        <iframe 
            width="450" 
            height="300" 
            className="uthub"
            src="https://www.youtube.com/embed/V5-7GzOfADQ" title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>


    </div>
  );
};

export default String;