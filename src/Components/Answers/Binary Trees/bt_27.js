
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check if a given graph is tree or not</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Basic idea is to check if there is cycle or after visiting connected node , is there any unvisited node.If any of condition become true, it is not a tree ,else:it is a tree.</p>
  <p>First create a visited array and mark all nodes unvisited.</p>
<p>Check for cycle ,if present : return false</p>
<p>Now, check for all nodes if visited or not.If not return false.</p>
<p>At last, if both condition not true , so it it a tree,hence return true.</p>
<h3>For cylce:</h3>
<p>We are checking cycle using isCyclicUtil Function.</p>
<p>First mark current node as visited.</p>
<p>Now, for all adjacent nodes:</p>
  <p>If visited,check if it is parent or not,if not:return true(i.e. cycle exist)</p>
  <p>If not visited,recur for that node to check cycle exist or not.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
bool Graph::isCyclicUtil(int v, bool visited[], int parent)
   {
      // Mark the current node as visited

      visited[v] = true;
    
      // Recur for all the vertices adjacent to this vertex

      list<int>::iterator i;
       
      for (i = adj[v].begin(); i != adj[v].end(); ++i)
      {
           // If an adjacent is not visited, then recur for
           // that adjacent
           if (!visited[*i])
           {
              if (isCyclicUtil(*i, visited, v))
                 return true;
           }
    
           // If an adjacent is visited and not parent of 
           //current vertex, then there is a cycle.

           else if (*i != parent)
              return true;
       }
       return false;
   }
    

   bool Graph::isTree()
   {
       // Mark all the vertices as not visited

       bool *visited = new bool[V];

       for (int i = 0; i < V; i++)
           visited[i] = false;
    
       if (isCyclicUtil(0, visited, -1))
                return false;
    
       // If a vertex not reachable from 0

       for (int u = 0; u < V; u++)
           if (!visited[u])
              return false;
    
       return true;
   }
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
