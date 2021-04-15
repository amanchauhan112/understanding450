import React from 'react'
import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const code=`
vector<vector<int>>nearest(vector<vector<int>>grid){
    // Code here

    int r=grid.size();
    int c=grid[0].size();

    int arr[1001][1001];

    queue<pair<int,int>>q;
    for(int i=0;i<r;i++)
    {
        for(int j=0;j<c;j++)
            arr[i][j]=INT_MAX;
    }
    for(int i=0;i<grid.size();i++)
    {
        for(int j=0;j<grid[i].size();j++)
        {


            if(grid[i][j]==1)
                q.push({i,j});
        }
    }

    //For up down left right

    int row_val[]={1,-1,0,0};
    int col_val[]={0,0,1,-1};

    int dis=0;//we will calculate it as 0 then after one iteration add 1

    while(!q.empty())
    {
        int size=q.size();
        for(int i=0;i<size;i++)
        {
        pair<int,int>p=q.front();
        q.pop();
        arr[p.first][p.second]=min(dis,arr[p.first][p.second]);

        for(int k=0;k<4;k++)
        {
            int row=p.first+row_val[k];
            int col=p.second+col_val[k];

            if(row>=0&&row<r&&col>=0&&col<c&&arr[row][col]==INT_MAX)
                q.push({row,col});
        }

        }
        dis++;
    }


    vector<vector<int>>v(r,vector<int>(c,0));

    for(int i=0;i<r;i++)
    {
        for(int j=0;j<c;j++)
        {
            v[i][j]=arr[i][j];
        }
    }

    return v;
}
`;

class one extends React.Component {
state={code}
render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        <div className="ans_heading">
         <h1 >Minimum  distance to 1</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'20px',justifyContent:'center'}}>


<h1>Optimal Approach :</h1>



{/* <h2><a href="https://github.com">Code link</a></h2> */}
<h2>Code</h2>

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

       <Comment/>

      
      
         </div>
 
       </div>
    )
}
}

export default one;
