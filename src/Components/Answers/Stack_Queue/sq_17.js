import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Maximum Rectangular Area in a Histogram </h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>The approach we are using here is, for each element we are calculating left and right limit ,then calculating area</p>
<p>Suppose , for any ith element : 0 is left limit and 3 is right</p>
<p>So, (3-0+1)*arr[i] will be area </p>
<p>If it is greater than max_area , make it max area</p>
<pre className="code">
  {
    `
    |
    |     |
    |   | |
    | | | |
    | | | |
    | | | |
    0 1 2 3
As here , element 1 can go from 0 to 3
So area will be (3-0+1)*3=12 units

    `
  }
</pre>
Now , to calculate this limit, we are taking RML and LML arrays for right an d left limits respectively
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
     long long getMaxArea(long long arr[], int n){
    
      // Your code here
     
      vector<long long>RML;
      
      stack<long long>s;
      s.push(n-1);
      RML.push_back(n-1);
      for(int i=n-2;i>=0;i--){
          while(!s.empty() and arr[s.top()]>=arr[i]){
              s.pop();
          }
          if(s.empty()){
              RML.push_back(n-1);
          }
          else{
              RML.push_back(s.top()-1);
          }
          s.push(i);
      }
   //We are reversing it for our convenience to calculate area   
      reverse(RML.begin(),RML.end());
      
      while(!s.empty())
          s.pop();
          
      vector<long long>LML;
      
      s.push(0);
      LML.push_back(0);
      for(int i=1;i<n;i++){
          while(!s.empty() and arr[s.top()]>=arr[i]){
              s.pop();
          }
          if(s.empty()){
              LML.push_back(0);
          }
          else{
              LML.push_back(s.top()+1);
          }
          s.push(i);
      }
      
      long long maxArea=INT_MIN;
      
      for(int i=0;i<n;i++)
      {
          long long area=(RML[i]-LML[i]+1)*arr[i];
          
          if(area>maxArea)
              maxArea=area;
      }
      
      return maxArea;
  }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
