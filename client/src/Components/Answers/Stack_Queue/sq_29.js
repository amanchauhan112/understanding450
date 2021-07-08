import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Interleave the first half of the queue with second half</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<h2>We are doing this in 3 steps</h2>
<p>First, push first half of queue in stack and pop it to push elements back into queue</p>
<p>Now push first half of queue back to queue </p>

<p>Now first half contains reverse of original first half and second half contains original second half</p>
<p>We will use this first half to insert elements in required order</p>

<p>So, push first half in stack, and in queue first push stack top , then queue front</p>

<pre className="code">
  {
    `
    Original : 11 12 13 14 15 16 17 18 19 20

    Push first hal in stack and insert back to queue

    Curr queue: 16 17 18 19 20 15 14 13 12 11

    Now push first half of curr queue back to queue

    Curr queue: 15 14 13 12 11 16 17 18 19 20

    Now push first half to queue :

    Curr queue : 16 17 18 19 20 , Curr queue : 15 14 13 12 11(Top) 

    Now insert s.top() first then queue.front() till stack empty() and all inserted

    !st : 16 17 18 19 20 11
    2nd : 17 18 19 20 11 16
    3rd : 17 18 19 20 11 16 12
    
              .
              .
              .
              .
    
    Last : 11 16 12 17 13 18 14 19 15 20


    `
  }
</pre>
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
   void interLeaveQueue(queue<int>& q)
   {
       if (q.size() % 2 != 0)
           cout << "Input even number of integers." << endl;
     
       stack<int> s;
       int halfSize = q.size() / 2;
     
       for (int i = 0; i < halfSize; i++) {
           s.push(q.front());
           q.pop();
       }
      
       while (!s.empty()) {
           q.push(s.top());
           s.pop();
       }


       for (int i = 0; i < halfSize; i++) {
           q.push(q.front());
           q.pop();
       }

       for (int i = 0; i < halfSize; i++) {
           s.push(q.front());
           q.pop();
       }
     
       while (!s.empty()) {
           q.push(s.top());
           s.pop();
           q.push(q.front());
           q.pop();
       }
   }
    
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
