import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Permutations of a given string</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Swap charachters at index l and r and recurse on string from l+1 to r index.</p>
<p>After this, swap back characters</p>   
   
   <h2>Code</h2>
    <h3>
          T.C:O(n*n!)
          <br />
          S.C:O(1)
    </h3>
        <pre className="code">
        {
            `
//Initially l=0 anr r= size-1
void permute(string a, int l, int r)
    {
        if (l == r)
            cout<<a<<endl;
        else
        {
            for (int i = l; i <= r; i++)
            {
                swap(a[l], a[i]);

                permute(a, l+1, r);
             
                //backtrack
                swap(a[l], a[i]);
            }
        }
    }
            `
        }
        </pre>
<h2>OR</h2>
<p>We can use substr function that will create substrings of given index range.</p>
<p>We will partition index from 0 to n-1 </p>
<pre className="code">
  {
    `
    void permute(string s , string answer,vector<string>&v)
    {
        if(s.length() == 0)
        {
            v.push_back(answer);
            return;
        }
        for(int i=0 ; i<s.length() ; i++)
        {
            char ch = s[i];
            string left_substr = s.substr(0,i);
            string right_substr = s.substr(i+1);
            string rest = left_substr + right_substr;
            permute(rest , answer+ch,v);
        }
     
    }
        vector<string>find_permutation(string S)
        {
            // Code here there
        vector<string>v;
        string ans="";
        permute(S,ans,v);
        sort(v.begin(),v.end());
        return v;
        }
    `
  }
</pre>
        A  different approach given <a href="https://www.geeksforgeeks.org/find-n-th-lexicographically-permutation-string-set-2/">here</a>
    </div>


    </div>
  );
};

export default String;