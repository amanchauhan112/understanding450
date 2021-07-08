import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1></h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Here, we are using two dequeue : S and G for smallest and greatest elements index</p>
<p>Elements in G will be decreasing so that max element at front</p>
<p>Elements in S will be increasing so that min element at front</p>

<p>If elements not in order, pop them from back of queue, else push index </p>
<p>Keep adding front to sum,remove elements from both deque till window end (i.e. i-K)</p> 
<p>keep maintaing increasing and decreasing order for both queues till all elements traversed and then return sum.</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
   int SumOfKsubArray(int arr[] , int n , int k)
   {
       int sum = 0;

       deque< int > S(k), G(k);
    
       int i = 0;
       for (i = 0; i < k; i++)
       { 
           while ( (!S.empty()) && arr[S.back()] >= arr[i])
               S.pop_back(); // Remove from rear
    
           while ( (!G.empty()) && arr[G.back()] <= arr[i])
               G.pop_back(); // Remove from rear
    
           G.push_back(i);
           S.push_back(i);
       }
    
       for (  ; i < n; i++ )
       {
           sum += arr[S.front()] + arr[G.front()];
    
           while ( !S.empty() && S.front() <= i - k)
               S.pop_front();

           while ( !G.empty() && G.front() <= i - k)
               G.pop_front();
    
           while ( (!S.empty()) && arr[S.back()] >= arr[i])
               S.pop_back(); // Remove from rear
 
           while ( (!G.empty()) && arr[G.back()] <= arr[i])
               G.pop_back(); // Remove from rear

           G.push_back(i);
           S.push_back(i);
       }

       sum += arr[S.front()] + arr[G.front()];
    
       return sum;
   }
    
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
