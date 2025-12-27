import React from 'react'
// import Comment from '../../Comment/Comment';
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
vector<int>bfsOfGraph(int V, vector<int> adj[])
	{
	    // Code here
	    
	    //For understanding purpose

	    
	    vector<int>v;
	    vector<int>visited(V,0);
	    queue<int>q;
	    q.push(0);
	    
	    while(!q.empty())
	    {
	        int temp=q.front();
	        q.pop();
	        v.push_back(temp);
	        
	   // for(int i=0;i<V;i++)
	   for(auto t:adj[temp])
	   
	    {
	        if(!visited[t])
	        {
	            
	            q.push(t);
	            visited[t]=1;
	            
	        }
	    }
		 
//	//	For loop can also be written as:  
		    
// 		for(int i=0;i<adj[temp].size();i++)
// 		{
// 	       if(!visited[adj[temp][i]])
// 	        {
// 	           q.push(adj[temp][i]);
// 	           visited[adj[temp][i]]=1;
// 	        }
// 	    }
	    
	    return v;
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
