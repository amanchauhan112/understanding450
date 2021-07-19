import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Print Anagrams Together </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We need to create map of vector,sort each string and push back its indx in map(it will go according to its anagram)</p>
<p>Then we can push them in vector and return results.</p>

 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
    </h3>

        <pre className="code">
        {
            `
        vector<vector<string> > Anagrams(vector<string>& string_list) 
        {
            // Your Code Here
            
            vector<vector<string>> ans;
                
            int n=string_list.size();
                
            if(n==0)
              return ans;
                
            unordered_map<string,vector<string>> m;
                
            for(auto i:string_list)
              {
                string s=i;
                sort(s.begin(),s.end());
                m[s].push_back(i);
              }
                
            for(auto i:m)
              ans.push_back(i.second);
                
            return ans;
        }
            `
        }
        </pre>

    </div>


    </div>
  );
};

export default String;