import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

//don't remove these lines
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        <div className="ans_heading">
         <h1 >First negative in window of k</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'20px',justifyContent:'center'}}>


<h1>Optimal Approach :</h1>



{/* <h2><a href="https://github.com">Code link</a></h2> */}
<h2>Code1</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3>
<pre>
  {
`
vector<long long>ans;

// queue<long long >q;
queue<long long >q_ind;

for(int i=0;i<K;i++)
{
    if(A[i]<0)
    {
        // q.push(A[i]);

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

<h2>Code2</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<pre>

  {


`

int firstNegativeIndex = 0;
int firstNegativeElement;


for(int i = k - 1; i < n; i++)
{

    // skip out of window and positive elements
    while((firstNegativeIndex < i ) &&
          (firstNegativeIndex <= i - k ||
          arr[firstNegativeIndex] > 0))
    {
        firstNegativeIndex ++;
    }

    // check if a negative element is found, otherwise use 0
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
