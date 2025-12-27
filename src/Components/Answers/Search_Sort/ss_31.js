import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>PRATA - Roti Prata</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Similar to other Advance Binary Search problem , we need to calculate min time</p>
<p>We will take low as0 and hig as 1e8 (as we are taking max and min limits)</p>
<p>We will move left and right accordingly</p>

   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

#include <bits/stdc++.h>
using namespace std;

int isEnoughTime(int cooks[],int n,int p,int minutes)
{
	int pranta=0;
	int sum=0;
	
	for(int i=0;i<n;i++)
	{
		int sum=cooks[i];
		int j=2;
		
		while(sum<=minutes)
		{
		    pranta++;
			sum = sum + (cooks[i]*j);
			j++;
		
    		if(pranta>=p)
    		{
    			return 1;
    			break;
    		}

		}
	
	}
	
	return 0;
}


int FindMinutes(int cooks[],int n,int p)
{
	int low=0,high=1e8;
	
	int ans=0;
	
	while(low<=high)
	{
	    int mid=low+((high-low)/2);
	    
		if(isEnoughTime(cooks,n,p,mid))
		{
			ans=mid;
			high=mid-1;
		}
		else
		{
			low=mid+1;	
		}
	}
	
	return ans;
}


int main() {
	// your code goes here
	
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	
	int t;
	cin>>t;
	
	while(t--)
	{
		int p;
		cin>>p;
		
		int n;
		cin>>n;
		
		int cooks[n];
		
		for(int i=0;i<n;i++)
		{
			cin>>cooks[i];
		}

		cout<<FindMinutes(cooks,n,p)<<"\n";
		
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
