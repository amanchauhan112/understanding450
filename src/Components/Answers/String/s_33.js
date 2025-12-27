import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Smallest window with distinct characters</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>First count distinct characters as we will check window of that size.</p>
 <p>Now keep increasing window till all element in window, store its size and then reduce size from beginning</p>
 <p>When any character not present , again increase size .In this way, count smallest window size. </p>
 
 
 <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
        string findSubString(string str)
        {
                // Your code goes here   
                
                long int map1[256]={0};
                
                long int n=0,count=0;
                
                for(int i=0;i<str.length();i++)
                {
                    if(map1[str[i]]==0)
                    {
                        n++;
                        map1[str[i]]=1;
                    }
                }
            
                
                long int beg=0,j=-1;    

                long int map[256]={0};

                long int min_len=INT_MAX;
                
                for(long int i=0;i<str.length();i++)
                {
                    map[str[i]]++;

                    if(map[str[i]]==1)
                        count++;
                        
                    if(count==n)
                    {
                        while(map[str[beg]]>1)
                        {
                            if(map[str[beg]]>1)
                                map[str[beg]]--;
                            beg++;                    
                        }
                    
                        long int ans_len=i-beg+1;
                        
                        if(min_len>ans_len)
                        {
                            min_len=ans_len;
                            j=beg;
                        }
                        
                    }
                    
                }
                string ans="";

                for(long int i=j;i<j+min_len;i++)
                    ans+=str[i];

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