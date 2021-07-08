import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Game with String</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>We need to delete k characters in such a way that sum of square of count of each character is least(n is number of distinct characters)</p>
<p>So we will keep decrementing frequency of character whose freq is max.</p>
<p>For this, first count frequency, insert frequencies in priority_queue</p>
        <p>Till k becomes 0, keep decrementing top of priority_queue as it has max frequency element, push it back</p>
        <p>Them print sum of square of frequencies</p>
        <h2>Code</h2>

        <h3>
          T.C:O(k*logn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   
   int minValue(string s, int k){
    // code here
    int MAX_CHAR=256;
    
 int arr[MAX_CHAR]={0};
 
 for(int i=0;i<s.length();i++)
 {
     arr[s[i]-'a']++;
 }
 
 priority_queue<int>pq;
 
 for(int i=0;i<MAX_CHAR;i++)
 {
     pq.push(arr[i]);
 }
 
 while(k--)
 {
     int temp=pq.top();
     pq.pop();
     temp--;
     pq.push(temp);
 }
    
    
int sum=0;

while(!pq.empty())
{
    int temp=pq.top();
    sum+=temp*temp;
    pq.pop();
}
return sum;
}
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
