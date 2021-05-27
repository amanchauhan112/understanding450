import React from 'react'
import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
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
        bool isCycle(int V, vector<int>adj[])
	{
	    // Code here
	  
	  bool visited[V];
	  memset(visited,false,sizeof(visited));//visited.size() is not valid  
	    queue<int>q;
    for(int i=0;i<V;i++)
    {
        if(!visited[i])
        {
           visited[i]=true;
            q.push(i);
            while(!q.empty())
            {
                int visited_count=0;
                int beg=q.front();
                q.pop();
                
                for(auto it=adj[beg].begin();it!=adj[beg].end();it++)
                {
                    if(!visited[*it])    //write *i and not i as it is iterator
                        {
                            q.push(*it);
                            visited[*it]=true;
                        }
                    else
                        {
                            visited_count++;
                        }
                }
                
                if(visited_count>1)
                    return true;
            }
        }
    }
    
    return false;
    
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
