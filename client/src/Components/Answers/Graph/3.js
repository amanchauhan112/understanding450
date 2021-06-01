import React from 'react'
import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


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
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3>
<pre className="code">

  {

    `
    // Recursive function for DFS:
// where v is the starting node/vertex

//first print current node and add its list and for each element of list repeat the same. 

// for checking visited or not:
//     map<int, bool> visited;

// Graph adj. map:
//     map<int, list<int>> adj;

// DFS traversal of the vertices reachable from v
    void DFS(int v);

void Graph::DFS(int v)
{
    // Mark the current node as visited and
    // print it
    visited[v] = true;
    cout << v << " ";
 
    // Recur for all the vertices adjacent
    // to this vertex
    list<int>::iterator i;
    for (i = adj[v].begin(); i != adj[v].end(); ++i)
        if (!visited[*i])
            DFS(*i);
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
