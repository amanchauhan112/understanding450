import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Bishu and Soldiers</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Check arr[j] less than or equal to power[i]</p>
 <p>Count it and also find sum</p>
 
  <h2>Code</h2>

        <h3>
          T.C:O(n*q)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

#include<bits/stdc++.h>
using namespace std;

int main()
{
   int n;
   cin>>n;

   int arr[n];

   for(int i=0;i<n;i++)
   {
	   cin>>arr[i];
   }

   int q;
   cin>>q;
int power[q];
   for(int i=0;i<q;i++)
   {
	   cin>>power[i];
   }

   for(int i=0;i<q;i++)
	{
		int count=0,sum=0;
for(int j=0;j<n;j++)
{
	if(arr[j]<=power[i])
	{
		count++;
		sum+=arr[j];
	}
}

cout<<count<<" "<<sum<<"\n";
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
