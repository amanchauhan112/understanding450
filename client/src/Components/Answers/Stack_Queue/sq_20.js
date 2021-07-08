import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Stack using two queues </h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Here we are working on pop function to behave as stack</p>
<p>While popping , elements from curr queue shift to second queue till last element</p>
<p>Last element is required top of stack, pop it and put all elements back to current queue</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n) for pop and O(1) for push
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
    void QueueStack :: push(int x)
    {
                q1.push(x);
    }
    
    int QueueStack :: pop()
    { 
            if(q1.empty()&&q2.empty())
                return -1;

            else
                {
                    while(q1.size()!=1)
                    {
                        q2.push(q1.front());
                        q1.pop();
                    }
                    int top=q1.front();
                    q1.pop();
                    
                    if(!q2.empty())
                    {
                        while(!q2.empty())
                        {
                            q1.push(q2.front());
                            q2.pop();
                        }
                    }
                    return top;
                }
    }
    
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
