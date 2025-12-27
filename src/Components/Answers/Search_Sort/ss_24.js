import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Aggressive Cows</h1>
      </div>
      <br/>
      <div className="solution">
      <p>We need to first maximize distance between cow, then print minimum distance among these distances</p>

        <h1>Optimal Approach :</h1>
        <p>First we will sort the array</p>
<p>Now, we will use binary search  here to solve our problem</p>
<h2>Why and how will we use Binary Search???</h2>
  <p>The idea of using binary search is to find gap at which we can place our cow</p>
  <p><h2>Simple Solution:</h2>We first take max gap (i.e. N-1) and decrement it till we are able to place all cows in N barns</p>

<p>Now as we know , this is linear search , and we always replace linear search with binary search for optimization</p>  
  <p>Now, instead of decrementing high value linearly, we will take mid and decrement our mid by making it half</p>
<p>So, initially low=0,high=n and mid= low+high/2 ..... then low and high will be changed according to all cows fitting in barns or not</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n*log(H-L))
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
 sort(a, a + n);
 int low = 0, high = a[n-1], mid, best = 0;
 while(low <= high){
     mid = (low + high + 1) / 2;
     int cnt = 1, left = 0;
     for(int i = 1; i < n && cnt < c; i ++){
         if(a[i] - a[left] >= mid)
             left = i, cnt ++;
     }
     if(cnt >= c){
         best = mid;
         low = mid + 1;
     }
     else{
         high = mid - 1;
     }
 }
 cout << best << endl;

            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
