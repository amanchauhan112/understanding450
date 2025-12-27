import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Second most repeated string in a sequence </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Add into map to count.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
    </h3>

        <pre className="code">
        {
            `
            string secFrequent (string arr[], int n)
            {
                //code here.
                
                map<string,int> mt;

                for(int i=0;i<n;i++)
                {
                    mt[arr[i]]++;
                }
                
                int max=0;
                
                string ans=arr[0];
                
                int sec=0;
                
                for(int i=0;i<n;i++)
                {
                    if(mt[arr[i]]>max)
                        max=mt[arr[i]];
                }
                                
                for(int i=0;i<n;i++)
                {
                    if(mt[arr[i]]>sec&&mt[arr[i]]<max)
                        {
                            sec=mt[arr[i]];
                            ans=arr[i];
                        }                       
                }
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