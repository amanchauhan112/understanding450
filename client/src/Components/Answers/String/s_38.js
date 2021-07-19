import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Remove Consecutive Characters</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
        int i=0;

        string removeCh(string str,string ans)
            {
                for(int i = 0; i < str.size(); i++)
                {
                    ans += str[i];
                    
                    while(i + 1 < str.size() && str[i+1] == str[i])
                    {
                        i += 1;
                    }
                }
                return ans;
            }
            
        string removeConsecutiveCharacter(string S)
          {
            string ans="";
            return removeCh(S,ans);
          }     
            `
        }
        </pre>
<h2>Recursive :</h2>
<pre className="code">
  {
    `
    string removeConsecutiveCharacter(string S)
{
// string ans="";
// return removeCh(S,ans);


if (S.size()==0) 
    return "";

char ch=S[0];

string ans = removeConsecutiveCharacter(S.substr(1));

if (ch==ans[0]) 
    return ans;
    
return ch+ans;

}
    `
  }
</pre>
    </div>


    </div>
  );
};

export default String;