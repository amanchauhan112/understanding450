import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>EKO - Eko</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<h2>A.B.S-{">"} Advance Binary Search Problem</h2>
<p>We need to fing level to be cut between 0 to max length tree</p>
<p>So, we will do our binary search between 0 to max length of tree</p>
<p>If required amount fulfilled , increase low as we need to find maximum lvl that can fulfill requirement as it is ecologically better.</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
#include <iostream>
using namespace std;


bool isEnoughWood(long long int arr[100],long long int n,long long int req,long long int lvl)
{
	int wood=0;
	
	for(int i=0;i<n;i++)
	{
	    if(arr[i]>=lvl)
	    	wood+=arr[i]-lvl;
		
		if(wood>=req)
			return true;
	}
	
	return false;
}

int main() {
	// your code goes here
	
	long long int n,req;
	cin>>n>>req;
	
	
	long long int arr[n];
	
		
	long long int low=0,high=-1;
	
	long long int sum=0;
	
	for(long long int i=0;i<n;i++)
	{
		cin>>arr[i];
		if(high<arr[i])
			high=arr[i];
	
	    // sum+=arr[i];
	    
	}
	
	// if(req>sum)
	//     return-1;
    
    long long int final=0;
    
	while(low<=high)
	{
		long long int mid=low+(high-low)/2;
		
		
// 			cout<<low<<mid<<high<<" ";
		
		if(isEnoughWood(arr,n,req,mid))
		{
			low=mid+1;
			if(mid>final)
				final=mid;
		}
		else 
			high=mid-1;
			
	}
	
    cout<<final<<"\n";
	return 0;
}

            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
