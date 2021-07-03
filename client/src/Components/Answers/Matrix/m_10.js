import React from 'react'
import '../../Answers/answer.css';

const m = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1>Common elements in all rows of a given matrix</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Insert rows in map</p>
  <p>When last row , check if element came <strong> (m-1)</strong> times , print it.</p>

    <h2>Code</h2>
<h3>
T.C:O(m*n)<br/>
S.C:O(n)
</h3>
<pre className="code">
{
`
void printCommonElements(int mat[M][N])
{
    unordered_map<int, int> mp;
   
    for (int j = 0; j < N; j++)
        mp[mat[0][j]] = 1;
 
    for (int i = 1; i < M; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (mp[mat[i][j]] == i)
            {
                mp[mat[i][j]] = i + 1;
 
                if (i==M-1 && mp[mat[i][j]]==M)
                  cout << mat[i][j] << " ";
            }
        }
    }
}
`
}
</pre>
</div>

  </div>
        </div>
    )
}

export default m
