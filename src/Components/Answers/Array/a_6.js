import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div className="ans_heading">

         <h1 >Find Union and Intersection of two unsorted arrays</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>
  One approach is to store all elements in unordered map , and return size of map.
</p>
<h2>Code</h2>
<h3>
    T.C:m * log(m) + n * log(n)<br/>
    S.C:O(m+n)
</h3>

<pre className="code">
  {
    `
    int main() {
      //code
      
      int t;
      cin>>t;
      
      while(t--)
      {
         int n,m;
         cin>>n>>m;
         
         int a[n],b[m];
         
          unordered_map<int,int>mt;
                 
         for(int i=0;i<n;i++)
          {
              cin>>a[i];
              mt[a[i]]++;
          }
         for(int i=0;i<m;i++)
          {
              cin>>b[i];
          mt[b[i]]++;
          }
          int count=0;
       
          count=mt.size();
          cout<<count<<endl;
      }
      
      return 0;
    }
    `
  }
</pre>
<p>There are many more solutions as given <a href="https://www.geeksforgeeks.org/find-union-and-intersection-of-two-unsorted-arrays/" >here</a> </p>

         </div>
</div>
 
       </div>
    )
}
}

export default one;
