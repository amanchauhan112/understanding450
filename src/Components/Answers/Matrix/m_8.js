import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Rotate matrix by 90 degrees</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Here we are taking i and j as corner positions in order to make them clockwise rotated</p>
 

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
void rotate90Clockwise(int a[N][N])
{
 

    for (int i = 0; i < N / 2; i++) {
        for (int j = i; j < N - i - 1; j++) {
            int temp = a[i][j];
            a[i][j] = a[N - 1 - j][i];
            a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
            a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
            a[j][N - 1 - i] = temp;
        }
    }
}
`
}
</pre>

<p>More approaches given <a href="https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/" >here</a></p>
</div>

  </div>
        </div>
    )
}

export default a
