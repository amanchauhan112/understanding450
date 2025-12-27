import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Smallest window in a string containing all the characters of another string</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Idea is to pick first string that contain all characters of second string(Using hashmaps of size 26) </p>
<p>store its length , and start index and then decrease its size till any character missing.</p>
<p>In the end return substring from start index till minlength</p>
 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
        string smallestWindow (string s, string p)
        {
            int hash1[26];
            int hash2[26];

            for(int i=0;i<26;i++)
            {
                 hash1[i]=0;
                 hash2[i]=0;
            }

            for(int i=0;i<p.length();i++)
              hash1[p[i]-'a']++;

            int count=0;
            int start=0;
            int minlen=INT_MAX;
            int startin=0;
              
            for(int i=0;i<s.length();i++)
              {
                hash2[s[i]-'a']++;

                if(hash1[s[i]-'a']!=0&&hash2[s[i]-'a']<=hash1[s[i]-'a'])
                  count++;
                  
                if(count==p.length())
                  {
                      while(hash2[s[start]-'a']>hash1[s[start]-'a']||hash1[s[start]-'a']==0)
                      {
                          if(hash2[s[start]-'a']>hash1[s[start]-'a'])
                              hash2[s[start]-'a']--;
                            
                          start++;        
                      }
  
                      int tmp=i-start+1;
                      
                      if(tmp<minlen)
                      {
                          minlen=tmp;
                          startin=start;
                      }
                  }
                  
              }

              if(minlen==INT_MAX)
                  return "-1";

              return s.substr(startin,minlen);
          }
            `
        }
        </pre>
<p>Check sliding window technique using map <a href="https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/">here</a></p>
    </div>


    </div>
  );
};

export default String;