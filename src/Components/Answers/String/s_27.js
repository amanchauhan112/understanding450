import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Longest Common Prefix</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First take first string, now for remaining string, match its character , and till they match add it to output string else stop.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
        string longestCommonPrefix(vector<string>& strs) 
        {                            
              int n=strs.size();
              
              if(n==0)
                    return "";
              if(n==1)
                          return strs[0];

              string pre="";

              string str=strs[0];

              int minimum=str.length();

              int i=1;
              
              while(i<n)
              {
                      string temp=strs[i];
                      // int minimum=min(temp.length(),str.length());
                      int j=0;
                      pre="";

                      while(j<minimum)
                      {
                          if(str[j]==temp[j])
                              pre+=str[j];
                          else
                              break;
                                                       
                          j++;
                      }
                      minimum=pre.length();
                      
                      if(minimum==0)
                          return pre;
                      
                      i++;
              }
                      
            return pre;  
              }        
            `
        }
        </pre>



    </div>


    </div>
  );
};

export default String;