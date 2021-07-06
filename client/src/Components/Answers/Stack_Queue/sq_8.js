import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Special Stack </h1>
        
      </div>
<br/>
      <div className="solution">
<h2>Stack operations in O(1) time</h2>
        <h1>Optimal Approach :</h1>
<p>In order to keep track of Minimum element :</p>
  <p>While pushing any element, check if it is less than previous min or not</p>
  <p>If yes:push 2*num-min,else : push num  </p>
   
  <p>While popping any element, check top of stack less than min or not</p>
  <p>If yes : i.e. we need to change min , i.e.  min=2*min-stackTop ,else : pop top of stack  </p>
   
   <p>Other functions are direct</p>
   
   <h2>Code</h2>

        <h3>
          T.C:O(1)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

int minEle;

void push(stack<int>& s, int a){
	// Your code goes here
	if(s.empty())
	    minEle=a;
	    
	int num=2*a-minEle;
	
	if(a<minEle)
	{
	    minEle=a;
    	s.push(num);
	}
    else
        s.push(a);

}

bool isFull(stack<int>& s,int n){
	// Your code goes here
	return(s.size()==n);
}

bool isEmpty(stack<int>& s){
	// Your code goes here
	return(s.empty());
}

int pop(stack<int>& s){
	// Your code goes here

    if(s.top()>minEle)
        s.pop();
    else
    {
        minEle=2*minEle-s.top();
        s.pop();
    }
}

int getMin(stack<int>& s){
	// Your code goes here
	
	if(s.size()==0)
	    return -1;
	    
	return minEle;

}
 
            `}
        </pre>
        Few more approaches given <a href="https://www.geeksforgeeks.org/design-and-implement-special-stack-data-structure/">here</a>
      </div>
    </div>
  );
};

export default sq;
