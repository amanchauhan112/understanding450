import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>The Double HeLiX</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are going to traverse both arrays together</p>
<p>When intersection come , check which array sum till now from previous intersection is greater </p>
<p>Add that sum in our answer and traverse remaining array</p>
<p>At last,, check for remaining elements</p>

   <h2>Code</h2>

        <h3>
          T.C:O(max(n1,n2))
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
#include <bits/stdc++.h>
using namespace std;

#define io ios_base::sync_with_stdio(false);cin.tie(NULL);

int main()
{
    io;
    
    while(true)
    {
        int n1;
        cin>>n1;
     
        if(n1==0) break;
        
        else
        {
   
        int arr1[n1];
        for(int i=0;i<n1;i++)
            cin>>arr1[i];
        
        int n2;
        cin>>n2;
        
        int arr2[n2];
        for(int i=0;i<n2;i++)
            cin>>arr2[i];
        
        //Two pointers to iterate
        int i=0,j=0;
        
        int s1=0,s2=0,ans=0;
        
        while(i<n1&&j<n2)
        {
            if(arr1[i]<arr2[j])
            {
                s1+=arr1[i];
                i++;
            }
            else if(arr1[i]>arr2[j])
            {
                s2+=arr2[j];
                j++;
            }
            else
            {
                ans+=max(s1,s2)+arr1[i];
                s1=0;
                s2=0;
                i++;j++;
                
            }
        }
        
        while(i<n1)
        {
            s1+=arr1[i];
            i++;
        }
        while(j<n2)
        {
            s2+=arr2[j];
            j++;
        }
        
        ans+=max(s1,s2);
        cout<<ans<<"\n";
        
        }
    }
    return 0;
}

            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
