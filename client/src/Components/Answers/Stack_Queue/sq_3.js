import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Implement 2 stack in an array</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Implemen  stack 1 from starting of array and stack 2 from ending of array </p>
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

  void twoStacks :: push1(int x)
  {
  top1++;
  arr[top1]=x;
  }
    
  void twoStacks ::push2(int x)
  {
      arr[--top2]=x;
  }

  int twoStacks ::pop1()
  {
      if(top1==-1)
      return -1;
      
      return arr[top1--];
  }

  int twoStacks :: pop2()
  {   if(top2==size)
          return -1;
      return arr[top2++];
  }

            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
