import React from 'react'
import '../../Answers/answer.css';

//don't remove these lines
import { highlight, languages } from 'prismjs/components/prism-core';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        <div className="ans_heading">
         <h1 >First negative in window of k</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'20px',justifyContent:'center'}}>


<h1>Approach 1 :</h1>
<p>First store first window elements in queue if they are negative</p>
<p>Now, for remaining elements:</p>
<p>If queue not empty : push (queue index)th element from array to answer vector</p>
<p>else : push 0</p>

Now we need to shift our window,so pop these elements till q.front {"<"}i-K+1<br/>
Now if curr element is negative , push its index in queue
{/* <h2><a href="https://github.com">Code link</a></h2> */}
<h2>Code1</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3>
<pre className="code">
  {
`
vector<long long>ans;

queue<long long >q_ind;

for(int i=0;i<K;i++)
{
    if(A[i]<0)
    {
        q_ind.push(i);
    }
}

 for(int i=K;i<N;i++)
 {
     if(!q_ind.empty())
        ans.push_back(A[q_ind.front()]);
     else
        ans.push_back(0);

     while(!q_ind.empty()&&q_ind.front()<(i-K+1))
        q_ind.pop();

    if(A[i]<0)
        q_ind.push(i);

 }
 
 if(!q_ind.empty())
    ans.push_back(A[q_ind.front()]);
 else
    ans.push_back(0);

  return ans;
`

  }
</pre>
<h1>Approach 2 :</h1>
<p>Here we will use  firstNegativeIndex  to find index of first negative number</p>
<p>Till window 1 keep incrementing firstNegativeIndex  if negative element not found</p>
<p>If found, print it , else print 0</p>
<p>Here we only increment it till i-k as we increment window element by element</p>
<p>So if first 4 character are positive , in second window, we will only check 1 element for negative</p>


<h2>Code2</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<pre className="code">

  {


`

int firstNegativeIndex = 0;
int firstNegativeElement;


for(int i = k - 1; i < n; i++)
{

    while((firstNegativeIndex < i ) &&
          (firstNegativeIndex <= i - k || arr[firstNegativeIndex] > 0))
    {
        firstNegativeIndex ++;
    }

    if(arr[firstNegativeIndex] < 0)
    {
        firstNegativeElement = arr[firstNegativeIndex];
    }
    else
    {
        firstNegativeElement = 0;
    }
    cout<<firstNegativeElement << " ";
}
`
  }
</pre>

      
      
         </div>
 
       </div>
    )
}
}

export default one;
