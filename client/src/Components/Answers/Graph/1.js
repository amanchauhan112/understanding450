import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div style={{border:'2px solid black',backgroundColor:"white",marginTop:'20px',display:'flex',justifyContent:'center',borderRadius:'50px 50px 50px 50px'}}>

         <h1 >First negative in window of k</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',justifyContent:'center',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'0px',display:'flex',justifyContent:'center'}}>
<div>

<h1>Optimal Approach :</h1>



<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(k)
</h3>

<pre className="code">
  {
    `
    //We can use 2D matix or use vector

    // A simple representation of graph using STL
    #include<bits/stdc++.h>
    using namespace std;
    
    // A utility function to add an edge in an
    // undirected graph.
    void addEdge(vector<int> adj[], int u, int v)
    {
      adj[u].push_back(v);
      adj[v].push_back(u);
    }
    
    // A utility function to print the adjacency list
    // representation of graph
    void printGraph(vector<int> adj[], int V)
    {
      for (int v = 0; v < V; ++v)
      {
        cout << "\n Adjacency list of vertex "
          << v << "\n head ";
        for (auto x : adj[v])
        cout << "-> " << x;
        printf("\n");
      }
    }
    
    // Driver code
    int main()
    {
      int V = 5;
      vector<int> adj[V];
      addEdge(adj, 0, 1);
      addEdge(adj, 0, 4);
      addEdge(adj, 1, 2);
      addEdge(adj, 1, 3);
      addEdge(adj, 1, 4);
      addEdge(adj, 2, 3);
      addEdge(adj, 3, 4);
      printGraph(adj, V);
      return 0;
    }
    `
  }
</pre>

   
      
         </div>
</div>
 
       </div>
    )
}
}

export default one;
