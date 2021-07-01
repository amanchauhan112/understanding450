import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div className="ans_heading">

         <h1 >Minimize the Heights</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>

<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<p className="answer">
--Make an array of all possible heights with the tower number, i.e. if height of any tower is h then we will insert h+k in the array and h-k(we will insert h-k in the array only if h-k ≥ 0). <br/>
--Sort the array.<br/>
--Now we will keep track of included index , once all index included , we will count difference of that window<br/>
--Then with the help of two pointer technique increment the left pointer which was initially at 0 such that one of the tower is not included.<br/>
--Then we are going to do same steps as above , i.e. include index till all index(tower) included.
--Increment right pointer to make all towers included and update the answer. Do this until end of the array.<br/>
</p>
<pre className="code">
  {
    `
    int getMinDiff(int arr[], int n, int k) {
        
      // code here
      
      
      vector<pair<int,int>>add_diff;
      
      vector<int> window(n);
     
      for(int i=0;i<n;i++)
      {
          if(arr[i]-k>=0)
              {
              add_diff.push_back({arr[i]-k,i});
              }
          
          add_diff.push_back({arr[i]+k,i});
              
      }
      
      sort(add_diff.begin(),add_diff.end());
      
      int left=0,right=0,ele=0;
      
      while(ele<n && right<add_diff.size())
      {
          if(window[add_diff[right].second]==0)  {
              ele++;
          }
          window[add_diff[right].second]++;
          right++;
          
      }
      
      int diff=add_diff[right-1].first-add_diff[left].first;
      
      while(right<add_diff.size())
      {
          if(window[add_diff[left].second]==1)
            {  ele--;}
      
      
      window[add_diff[left].second]--;
      left++;
      
      while(ele<n&&right<add_diff.size()){
          if(window[add_diff[right].second]==0)
          {
              ele++;}
              window[add_diff[right].second]++;
              right++;
          
      }
      
      
      if(ele==n)
      {
          diff=min(diff,add_diff[right-1].first-add_diff[left].first);
      }
      else{
        break;
      }
      }
      return diff;
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
