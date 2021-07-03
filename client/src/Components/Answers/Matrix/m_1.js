import React from 'react'
import '../../Answers/answer.css';

const m = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1>Spiral traversal on a Matrix</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Although it's si,ple printing matrix but it gets little tricky to think about starting and ending</p>
<p>Ther are 4 steps involved:</p>
<p>1.Start from ro 0 col 0 and print complete row (0 to n)</p>
<p>2.Now increase row by one as we won't print row 1 again , and print complete column (0 to m)</p>
<p>3.Now decrease col by one as we won't print last column again , and print last row in reverse.</p>
<p>4.Decrement row by on  <strong>[[if row{"<"}=m]]</strong>  as we won't print it again and similarly do for column and increment it.</p>
<p>Do these 4 steps till row{"<"}m & col{"<"}n</p>
<h2>Code</h2>
<h3>
T.C:O(m*n)<br/>
S.C:O(1)
</h3>

<pre className="code">
{
`
vector<int> spirallyTraverse(vector<vector<int> > matrix, int r, int c) 
    {
        // code here 
        
        vector<int>v;
        
        int row=0,col=0;
        int rowend=r-1,colend=c-1;
        int i,j;
        
        while(row<=rowend&&col<=colend)
        {
            
            for(i=row;i<=colend;i++)
            {
                cout<<matrix[row][i]<<" ";
            }
            row++;
             
            for(i=row;i<=rowend;i++)
            {
                cout<<matrix[i][colend]<<" ";
            }
            colend--;
            
            if(row<=rowend)
            {
            for(i=colend;i>=col;i--)
            {
                cout<<matrix[rowend][i]<<" ";
            }
            rowend--;
            }
            
            if(col<=colend)
               {
                   for(i=rowend;i>=row;i--)
                {
                cout<<matrix[i][col]<<" ";
                }
               }
            col++;
            
        }
        
        return v;
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
