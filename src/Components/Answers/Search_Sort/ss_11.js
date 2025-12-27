import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find four elements that sum to a given value</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Simple approach with 4 loops will take T.C. O(n^4) , but we need to optimise it</p>
<p>This problem is similar to triplets with given sum, jus one loop is added </p>  
  <p>Two loops for two pointers and then  other two pointers will traverse remaining array for each value s of first two pointers</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

vector<vector<int> > fourSum(vector<int> &arr, int k) {

  int n=arr.size();
  int count=0;
  
  vector<vector<int> >vt;
  
  if(n<4)
      return vt;
  
  sort(arr.begin(),arr.end());
  
 
  
  for(int i=0;i<n;i++)
  {
      for(int j=i+1;j<n-2;j++)
      {
        
          
          int front=j+1;
          int back=n-1;
          while(front<back)
          {
              vector<int>v;
              int sum=arr[i]+arr[j]+arr[front]+arr[back];
              
              if(sum==k)
                  {
                      v.push_back(arr[i]);
                      v.push_back(arr[j]);
                      v.push_back(arr[front]);
                      v.push_back(arr[back]);
                    
                      vt.push_back(v);
                      
                      front++;
                      back--;
               }
              else if(sum<k)
                  front++;
              else 
                  back--;
              
          }
      }
  }

  sort(vt.begin(),vt.end());
  vt.erase(unique(vt.begin(),vt.end()), vt.end());
  return vt;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
