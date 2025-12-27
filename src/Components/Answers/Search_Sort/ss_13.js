import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Count triplet with sum smaller than a given value</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Place a pointer i at first location and traverse array</p>
<p>For each value of i , use two pointers (front,back) to traverse the remaining array</p>
<p>If sum of i j k is smaller than X , increment count by back-front(it will ount all possible triplet in between) and increment front, else : decrement back</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n^2)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
	long long countTriplets(long long arr[], int n, long long sum)
	{
	    // Your code goes here
	    
	    int front,back;
	    int count=0;
	    
	    sort(arr,arr+n);
	    
	    for(int i=0;i<n-2;i++)
	    {
	  
	        front=i+1;
	        back=n-1;
	        
	        while(front<back)
	        {
	            int s=arr[i]+arr[front]+arr[back];
	            
	            if(s<sum)
	            {
	                count+=back-front;
    	            front++;
	            }
	            else if(s>=sum)
	                back--;

	        }
	        
	    }
	    
	    return count;
	    
	}

            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
