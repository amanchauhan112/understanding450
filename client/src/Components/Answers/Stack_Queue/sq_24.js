import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Implement k Queues in a single array</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Similar to stack,here we will also create multiple arrays</p>
<p>Front array(size=k) : store front elements (Initialize it as -1)</p>
<p>Rear array(size=k) : store rear elements </p>
<p>Next array(size=n) : store next of front elements (Initialize it as i+1)</p>
<p>Output array(size=n) : store output elements</p>
<p>Initialize a free variable as 0</p>


<h2>Push Operation:</h2>
<p>First check if (qn)th queue is empty or not</p>
<p>If empty:front for qn=free, else :front is already present so make next[rear[qn]]= free</p>
<p>Make next[i]=-1 (i.e. it has no next element), and update rear as free and store element in output array</p>
<p>Now increment free as this index is filled</p>


<pre className="code">
  {
    `
void enqueue(int item, int qn)
{
    if (isFull())
    {
        cout << "Queue Overflow";
        return;
    }
 
    int i = free;
 
    free = next[i];

    if (isEmpty(qn))
        front[qn] = i;
    else
        next[rear[qn]] = i;
 
    next[i] = -1;
    rear[qn] = i;
    arr[i] = item;
}
    `
  }
</pre>

<h2>Pop Operation:</h2>
<p>Check if particular queue is empty or not</p>
<p>Now, store index of front element of required queue(Let's say in i) </p>
<p>Make its front = next[i] (as this is next element) and update next as free (free is currently n+1 so this space is not in use)</p>
<p>Make free=i as i is free now</p>

<pre className="code">
  {
    `
int dequeue(int qn)
{

    if (isEmpty(qn))
    {
         cout << "Queue Underflow";
         return INT_MAX;
    }
 
    int i = front[qn];
    front[qn] = next[i];
    next[i] = free;
    free = i;
    return arr[i];
}
    `
  }
</pre>

        {/* <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   
    
            `}
        </pre> */}

        Check complete code <a href="https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/">here</a> 
      </div>
    </div>
  );
};

export default sq;
