import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Find a specific pair in matrix</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>First Create an empty matrix of same size</p>
<p>Add last row and last columnf as max elements</p>  
<p>Now for rest of rows and columns:</p>
<p>If difference of diagnol elements more than previous max value,change max value to this difference</p>
<p>Update value of current position as <strong> max of (curr position element in original matrix,right element in maxArr matrix,below element in maxArr matrix)</strong></p>

<h2>Code</h2>
<h3>
T.C:O(n*n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`

//N is row and column
int findMaxValue(int mat[][N])
{

    int maxValue = INT_MIN;
 
    // maxArr[i][j] stores max of elements in matrix from (i, j) to (N-1, N-1)
    int maxArr[N][N];
 
    // last element of maxArr will be same's as of
    // the input matrix
    maxArr[N-1][N-1] = mat[N-1][N-1];
 
    // preprocess last row
    int maxv = mat[N-1][N-1];  // Initialize max
    for (int j = N - 2; j >= 0; j--)
    {
        if (mat[N-1][j] > maxv)
            maxv = mat[N - 1][j];
        maxArr[N-1][j] = maxv;
    }
 
    // preprocess last column
    maxv = mat[N - 1][N - 1];  // Initialize max
    for (int i = N - 2; i >= 0; i--)
    {
        if (mat[i][N - 1] > maxv)
            maxv = mat[i][N - 1];
        maxArr[i][N - 1] = maxv;
    }
 
    // preprocess rest of the matrix from bottom
    for (int i = N-2; i >= 0; i--)
    {
        for (int j = N-2; j >= 0; j--)
        {

            if (maxArr[i+1][j+1] - mat[i][j] > maxValue)
                maxValue = maxArr[i + 1][j + 1] - mat[i][j];
 
            maxArr[i][j] = max(mat[i][j],max(maxArr[i][j + 1],maxArr[i + 1][j]) );
        }
    }
 
    return maxValue;
}
`
}
</pre>
</div>

  </div>
        </div>
    )
}

export default a
