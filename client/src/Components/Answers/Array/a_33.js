import React from "react";
import "../../Answers/answer.css";

const a = () => {
  return (
    <div>
      <div className="div">
        <div className="ans_heading">
          <h1>Minimum swaps and K together</h1>
          <p>Here we are assuming req. numbers i.e. less than equal to k as good and other as bad</p>
          <p>First we are counting good numbers</p>
          <p>Then in length of good numbers check bad numbers and make ans = bad</p>
         
         <p>Now we will look into window of numbers</p>
        <p>Now inside window of size of good numbers check bad numbers and decrement bad</p>
        <p>And outside window, check bad and increment it</p>
        <p>Finally make ans min of previous ans and bad.</p>
          <br />
        </div>

        <br></br>
        <div className="solution">
          <div>
            <h1>Optimal Approach :</h1>
            <h2>Code</h2>
            <h3>
              T.C:O(n)
              <br />
              S.C:O(1)
            </h3>
            <pre className="code">
              {`

int minSwap(int *arr, int n, int k) {
        
int good=0;
int bad=0;

for(int i=0;i<n;i++)
{ 
    if(arr[i]<=k) 
        good++;
    
}

for(int i=0;i<good;i++)
{
    if(arr[i]>k)
        bad++;
}

int ans=bad;
int i=0;
for(int j=good;j<n;j++)
{
    if(arr[i]>k)
        bad--;
        
    if(arr[j]>k)
        bad++;

ans=min(bad,ans);

i++;

}
        
return ans;
    
}

`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default a;
