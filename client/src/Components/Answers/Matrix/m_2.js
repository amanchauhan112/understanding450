import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Search an element in a matrix</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>

  <p>We are traversing matrix</p>
  <p>If last element of row {"<"} target , go to next row ,else traverse that row </p>
  <p>If element greater than target , not possible to find target </p>

    <h2>Code</h2>
<h3>
T.C:O(m+n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
    int size=matrix.size();
    int n=matrix[0].size();
    int i=0,j=0;

    while(i<size)
    {
            j=0;
            
            while(j<n)
            {
                if(matrix[i][j]==target)
                    return 1;
                    
             j++;

            if(matrix[i][n-1]<target)
                    j=n;

             if(j<n&&matrix[i][j]>target)
                    return 0;
            }
            
            i++;
    }
    
    return 0;
}
`
}
</pre>
<p>More solutions are disussed <a href="https://leetcode.com/problems/search-a-2d-matrix/discuss/?currentPage=1&orderBy=most_votes&query=" >here</a></p>
</div>

  </div>
        </div>
    )
}

export default a
