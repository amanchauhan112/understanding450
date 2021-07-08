import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Next Smaller Element</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Push first element to stack and iterate for remaining elements</p>
<p>For remaining elements, if stack empty : push into stack,else : while(top of stack greater than element) print element and pop stack </p>
<p>In the end push element</p>
<p>Now if stack is still not empty,i.e. no smaller elements, so print -1 for them</p>
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   
   void printNSE(int arr[], int n)
   {
       stack<int> s;

       s.push(arr[0]);

       for (int i = 1; i < n; i++) {
    
           if (s.empty()) {
               s.push(arr[i]);
               continue;
           }

           while (s.empty() == false && s.top() > arr[i]) {
               cout << s.top() << " --> " << arr[i] << endl;
               s.pop();
           }

           s.push(arr[i]);
       }

       while (s.empty() == false) {
           cout << s.top() << " --> " << -1 << endl;
           s.pop();
       }
   }
            `}
        </pre>
<p>In this first smaller will be printed from largest  number till smaller , then -1 for remaining</p>
        <h2>Get elements in same order : </h2>
   <p>Here we will store for each element its next smaller in unordered map instead of printing, then print in the end according to array.</p>
        <h2>Code</h2>
        <pre className="code">
          {
            `
void printNSE(int arr[], int n)
{
    stack<int> s;
    unordered_map<int, int> mp;

    s.push(arr[0]);

    for (int i = 1; i < n; i++) {
 
        if (s.empty()) {
            s.push(arr[i]);
            continue;
        }

        while (s.empty() == false && s.top() > arr[i]) {
            mp[s.top()] = arr[i];
            s.pop();
        }

        s.push(arr[i]);
    }

    while (s.empty() == false) {
         mp[s.top()] = -1;
        s.pop();
    }
 
    for (int i=0; i<n; i++)
       cout << arr[i] << " ---> " << mp[arr[i]] << endl;
}
            `
          }
        </pre>
      </div>
    </div>
  );
};

export default sq;
