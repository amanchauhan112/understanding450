import React from 'react'
import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
const one = () => {

    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>
        <div className="ans_heading">
         <h1 >Rotten Oranges</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'20px',justifyContent:'center'}}>
         <h1 >Given a grid of dimension nxm where each cell in the grid can have values 0, 1 or 2 which has the following meaning:
         <br/>
0 : Empty cell<br/>
1 : Cells have fresh oranges<br/>
2 : Cells have rotten oranges<br/>

We have to determine what is the minimum time required to rot all oranges. A rotten orange at index [i,j] can rot other fresh orange at indexes [i-1,j], [i+1,j], [i,j-1], [i,j+1] (up, down, left and right) in unit time. </h1>
<br/>     Input: grid = 0,1,2 , 0,1,2 , 2,1,1<br/>
Output: 1<br/>
Explanation: The grid is-<br/>
0 1 2<br/>
0 1 2<br/>
2 1 1<br/>
Oranges at positions (0,2), (1,2), (2,0)
will rot oranges at (0,1), (1,1), (2,2) and 
(2,1) in unit time.
         <br/>
         Input: grid = 2,2,0,1<br/>
Output: -1<br/>
Explanation: The grid is-<br/>
2 2 0 1<br/>
Oranges at (0,0) and (0,1) can't rot orange at
(0,3).
<br></br>

<h1>Optimal Approach :</h1>

<h4>We need to check for rotten orange top,down,left and right.We will make then 2 if they are 1 and just keep a time track
which will tell you if you are infecting orange using rotten orange or infected orange.<br/>

For this ,we will make q queue that will store your rotten orange coordinates and after 
that it will also keep track or infected oranges .


</h4>

 Below is the implementation of the above approach : 

 <h4>First we will make a function that will check top ,bottom ,left and right or 
   element whose coordinates are passed. </h4>
<br/><br/>

<p className="answer">
   void rot(vector{"<vector<int>>"}&m, int r, int c, int x, int y, queue{"<pair<int, int>>"}&q, vector{"<vector<int>>"}&visited)<br/> {"{"}<br/>
    if(x+1{"<"}r && (m[x+1][y] == 1) && !visited[x+1][y]) {"{"}<br/>
        m[x+1][y] = 2;<br/>
        {"q.push({x+1, y});"}<br/>
    {"}"}<br/>
    if(x-1{">"}=0 && m[x-1][y] == 1 && !visited[x-1][y]){" {"}<br/>
        m[x-1][y] = 2;<br/>
        {"q.push({x-1, y});"}<br/>
    {"}"}<br/>
    if(y-1{">"}=0 && m[x][y-1] == 1 && !visited[x][y-1]) {"{"}<br/>
        m[x][y-1] = 2;<br/>
        {"q.push({x, y-1});"}<br/>
    {"}"}<br/>
    if(y+1{"<"}c && m[x][y+1] == 1 && !visited[x][y+1]) {"{"}<br/>
        m[x][y+1] = 2;<br/>
        {" q.push({x, y+1}); "}<br/>
    {"}"}<br/>
{"}"}<br/>
</p>
<p className="answer">
int orangesRotting(vector{"<vector<int>>"}& grid)<br></br>
{"{"}
</p>
<h4>
 

  <br/>
  Now we will use this function while traversing each rotten orange:

  <br/>
  first we will enter coordinates of each rotten orange.
</h4>
       <p className="answer">
<br/>
       int r=grid.size();<br/>
    int c=grid[0].size();<br/>
    queue{"<pair<int, int>>"} q;<br/>
    vector{"<vector<int>>"} visited(r, vector{"<int>"}(c, 0));<br/>
    for(int i=0; i{"<"}r; i++) {"{"}<br/>
        {"for"}(int j=0; j{"<"}c; j++) {"{"}<br/>
            {"if"}({"grid[i][j]"} == 2)<br/>
                {"q.push({i, j});"}<br/>
       {" }"}<br/>
    {"}"}<br/>
           
       </p>
       <h4>

         at last we will push (-1,-1) so that we know when to stop.
         <br/>
         Now we will finally check for each front element of queue if :
         <br>
         </br>

         if we find -1  then we need to update our answer 
         else 
         we make it visited and run our rot funtion to make  its surrounding rotten
         top bottom left right is 1 or not
</h4>
<p className="answer">
         {"q.push({-1, -1});"}<br/>
    int ans = 0;<br/>
    while(!q.empty()) {"{"}<br/>
        pair{"<int, int>"} p {"="} q.front();<br/>
        q.pop();<br/>
        int x = p.first, y = p.second;<br/>
        if(x {"<"} 0) {"{"}<br/>
            ans = max(ans, abs(x)){";"}<br/>
            if(!q.empty())<br/>
                q.push({"{"}x-1, y-1{"}"});<br/>
            continue;<br/>
        {"}"}<br/>
        visited[x][y] = 1;<br/>
        rot(grid, r, c, x, y, q, visited);<br/>
    {"}"}<br/>

    </p>
  
       <h4>
         Finally if any 1 still remaining , we return -1.
       </h4>
       <p className="answer">

       for(int i=0; i{"<"}r; i++) {"{"}<br/>
        for(int j=0; j{"<"}c; j++) {"{"}<br/>
            if(grid[i][j] == 1)<br/>
                return -1;<br/>
        {"}"}<br/>
    {"}"}
    return ans-1;
{"}"}
       </p>
       <Comment/>

      
      
         </div>
 
       </div>
    )
}

export default one
