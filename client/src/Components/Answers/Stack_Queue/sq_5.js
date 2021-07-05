import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Implement "N" stacks in an Array

        </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We will use 2 array and one variable:</p>
<p>top array of size equal to number of stacks:tells us top of each stack</p>
<p>next array of size n: tells us where next element of particular stack is present</p>
<p>Free variable : tells us next free slot in our array</p>
     

     <p>We will increase our free pointer as we push into array</p>
     <p>We will change our top[stack number] and next[previous free] as well.</p>
        <h2>Code</h2>

        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3> */}

        <pre className="code">
          {`

kStacks::kStacks(int k1, int n1)
{
    // Initialize n and k, and allocate memory for all arrays
    k = k1, n = n1;
    arr = new int[n];
    top = new int[k];
    next = new int[n];
  
    // Initialize all stacks as empty
    for (int i = 0; i < k; i++)
        top[i] = -1;
  
    // Initialize all spaces as free
    free = 0;
    for (int i=0; i<n-1; i++)
        next[i] = i+1;
    next[n-1] = -1;  // -1 is used to indicate end of free list
}
  
void kStacks::push(int item, int sn)
{
    if (isFull())
    {
        cout << "Stack Overflow";
        return;
    }
  
    int i = free;      // Store index of first free slot
  
    free = next[i];
  
    next[i] = top[sn];
    top[sn] = i;
  
    arr[i] = item;
}
  
int kStacks::pop(int sn)
{
    // Underflow check
    if (isEmpty(sn))
    {
         cout << "Stack Underflow";
         return INT_MAX;
    }
  
    int i = top[sn];
  
    top[sn] = next[i];  // Change top to store next of previous top
  
    next[i] = free;
    free = i;

    return arr[i];
}
            `}
        </pre>

You can check this video if you need more clarity on this approach:

<iframe 
    width="627" 
    height="374" 
    src="https://www.youtube.com/embed/S5cYO9k1Ja8" title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    
  </iframe>
      </div>


    </div>
  );
};

export default sq;
