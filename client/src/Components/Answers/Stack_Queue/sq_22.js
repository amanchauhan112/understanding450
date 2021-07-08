import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Stack Permutations</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Stack permutation means if using stack and an output queue , we can make required output array or not</p>
<p>Stack can be uses to push and pop elements nut queue can only be used to insert data, but we can't delete data from queue</p>

<h2>Approach:</h2>
<p>Check if front of input and output queue are same</p>
<p>If same, pop elements from stack and output queue till elements differ</p>
<p>Else:Insert elements to stack till front of output queue equal to top of stack</p>
<p>Pop input queue as well till elements same</p>
<p>Repeat above steps till all elements traversed or stack empty </p>

<p>Now, if stack and input queue not empty after all traversal , return -1</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   bool checkStackPermutation(int ip[], int op[], int n)
   {
       queue<int> input;
       for (int i=0;i<n;i++)
           input.push(ip[i]);

       queue<int> output;
       for (int i=0;i<n;i++)
           output.push(op[i]);
     
       stack <int> tempStack;

       while (!input.empty())
       {
           int ele = input.front();
           input.pop();

           if (ele == output.front())
           {
               output.pop();

               while (!tempStack.empty())
               {
                   if (tempStack.top() == output.front())
                   {
                       tempStack.pop();
                       output.pop();
                   }
                   else
                       break;
               }
           }
           else
               tempStack.push(ele);
       }
       return (input.empty()&&tempStack.empty());
   }
    
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
