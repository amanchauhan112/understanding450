import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Common elements in 3 sorted arrays</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>One way is to store elements in a mao and check if any ele came more than 2 times</p>
<p>Another Approach is given below:</p>
<p>We move ahead if ele less than other araay elements 
<br/>
If all are same , we will count them.

</p>

<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
vector <int> commonElements (int A[], int B[], int C[], int n1, int n2, int n3)
        {
            //code here.
            vector<int>v;
               int i=0,j=0,k=0;
            
            while(i<n1&&j<n2&&k<n3)
            {
                if(A[i]==B[j]&&B[j]==C[k])
                   {
                   v.push_back(A[i]);
                   i++;
                   j++;
                   k++;
                   }
            
                else if(A[i]<B[j])
                    i++;
                else if(B[j]<C[k])
                    j++;
                else
                    k++;
                
                    
            }
            set<int>s;
            queue<int>q;
            
            vector<int>vt;
            
            for(int i=0;i<v.size();i++)
                {
                    while(v[i]==v[i+1]&&i<v.size()-1)
                        i++;
                    q.push(i);
                }
                
            while(!q.empty())
                {
                    vt.push_back(v[q.front()]);
                    q.pop();
                }
            return vt;
        }
`
}
</pre>


    </div>
</div>

  </div>
        </div>
    )
}

export default a
