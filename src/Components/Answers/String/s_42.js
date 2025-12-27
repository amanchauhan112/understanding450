import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Isomorphic Strings</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Length of both strings should be same.Store frequency of characters in hashmap.If frequency of characters same for same index of both strings, they are isomorphic.</p>

 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
bool areIsomorphic(string str1, string str2)
  {
                
    // Your code here
                
    if(str1.length()!=str2.length())
        return 0;
                
    int space1[1000]={0},space2[1000]={0};
                
    for(int i=0;i<str1.length();i++)
        space1[str1[i]]++;
                    
    for(int i=0;i<str2.length();i++)
        space2[str2[i]]++;
                    
    for(int i=0;i<str1.length();i++)
    {
        if(space1[str1[i]]!=space2[str2[i]])
            return 0;
    }
                
    return 1;
                
  }
            `
        }
        </pre>

    </div>


    </div>
  );
};

export default String;