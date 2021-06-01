import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const code=`
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


`;

const code2=`
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
`;

class one extends React.Component {
state={code,code2}

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
<Editor
        value={this.state.code}
        onValueChange={code => code}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
         
        } }
        className="answer"
      />
<h2>Code2</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<Editor
        value={this.state.code2}
        onValueChange={code2 => code2}
        highlight={code2 => highlight(code2, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
         
        } }
        className="answer"
      />
       {/* <Comment/> */}

      
      
         </div>
 
       </div>
    )
}
}

export default one;
