import React from 'react'
import '../../Answers/answer.css';

const m = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Kth smallest element in a row-column wise sorted matrix</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>

  <p>Create a priority queue and insert elements till size less than k</p>
<p>Now the top element will show maximum element.<br/> 
In our remaining matrix,we will insert element in priority queue by replacing top element only if they are less than top element of priority queue. </p>
   <p>In the end , return top element of queue</p>
    <h2>Code</h2>
<h3>
T.C:O(n*n)<br/>
S.C:O(k)
</h3>
<pre className="code">
{
`
int kthSmallest(int mat[MAX][MAX], int n, int k)
{
  //Your code here
  
  priority_queue<int>pq;
  
  for(int i=0;i<n;i++)
  {
      for(int j=0;j<n;j++)
      {
          if(pq.size()<k)
          {
              pq.push(mat[i][j]);
          }
          else
          {
              if(mat[i][j]<pq.top())
                {
                pq.pop();
                pq.push(mat[i][j]);
                }
          }
      }
  }
  
  return pq.top();
}

`
}
</pre>

More approaches given <a href="https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array-set-1/"> here</a>
</div>

  </div>
        </div>
    )
}

export default m