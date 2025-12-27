import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>minimum no. of swaps required to sort the array</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First make an vector of pairs with ele and original index</p>
<p>Sort this vector, if element not in true position, swap it with position and count</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n*n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`

int minSwaps(int arr[], int N){

  /*Your code here */

  int count=0;
//Make Vector pair with array and index
//Sort it acc. to values and make back original array and count swap

int n=N;
vector<pair<int,int>> v(N);

for(int i=0;i<n;i++)
{
   v[i].first=arr[i];
   v[i].second=i;
// v[i]={arr[i],i};
}

sort(v.begin(),v.end());

for(int i=0;i<n;i++)
{
    if(i!=v[i].second)
    {
        swap(v[i],v[v[i].second]);
        count++;     
        i--; }
}

  return count;
}

            `}
        </pre>
<p>More visulaised solution given <a href="https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/">here</a></p>
      </div>


    </div>
  );
};

export default ss;
