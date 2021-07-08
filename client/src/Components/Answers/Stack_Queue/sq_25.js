import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Implement a Circular queue</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>

<p>Front  : store front element (Initialize it as -1)</p>
<p>Rear : store rear element (Initialize it as -1) </p>
<p>Output array(size=n) : store output elements</p>

<p> <strong>enQueue(value)</strong>  : In a circular queue, the new element is always inserted at Rear position as in normal queue. </p>
<p>Check whether queue is Full((rear == SIZE-1 && front == 0) || (rear == front-1)).<br/>
If not : check if (rear == SIZE – 1 && front != 0) : <br/>if true : rear=0 (as in circular queue : after rear becomes equal to size, it goes back to front) or chek other conditions and set rear acccordingly and then insert element.</p>

<pre className="code">
        {
          `
          void Queue::enQueue(int value)
          {
              if ((front == 0 && rear == size-1) || (rear == (front-1)%(size-1)))
              {
                  printf("Queue is Full");
                  return;
              }
           
              else if (front == -1)
              {
                  front = rear = 0;
              }
           
              else if (rear == size-1 && front != 0)
              {
                  rear = 0;
              }
           
              else
              {
                  rear++;
              }

              arr[rear] = value;

          }
          `
        }
      </pre>
      

<p><strong>deQueue()</strong> : Check whether queue is Empty(front==-1)</p>
<p>If not : if (front==rear) : front=rear= -1 ( Since only one element ) <br/> &emsp;&emsp;&emsp; else : if (front==size-1) : front=0 , else: increment front and return the element.</p>
<pre className="code">
        {
          `
          int Queue::deQueue()
          {
              if (front == -1)
              {
                  printf("Queue is Empty");
                  return INT_MIN;
              }
           
              int data = arr[front];
              arr[front] = -1;
              if (front == rear)
              {
                  front = -1;
                  rear = -1;
              }
              else if (front == size-1)
                  front = 0;
              else
                  front++;
           
              return data;
          }
          `
        }
      </pre>
      
        <h2>Check complete code <a href="https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/">here</a></h2>

        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   
    
            `}
        </pre> */}
      </div>
    </div>
  );
};

export default sq;
