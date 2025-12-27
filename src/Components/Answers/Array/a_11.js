import React from 'react'
import '../../Answers/answer.css';

class a_1 extends React.Component {

render(){
    return (
        <div className="div">

 
     <div className="ans_heading">

         <h1 >Find duplicate in an array of N+1 Integers</h1><br/>
         </div>

         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<h2>Using Extra Space:</h2>
<p>Store in map nd count which number came twice.</p>

<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(n)
</h3>
<pre className="code">
  {
    `
    int findDuplicate(vector<int>& nums) {
      int n=nums.size();
      
      //Approach-1:
      
      map<int,int>mt;
      
      for(int i=0;i<n;i++)
      {
              mt[nums[i]]++;
      if(mt[nums[i]]>1)
          return nums[i];
      }
        
      return -1;
  
}
    `
  }
</pre>

<h2>Without using Extra Space:</h2>
<p>First calculate mid.</p>
<p>Count less than min numbers</p>
<p>if more than mid = chk 1 to mid ,else mid+1 to n </p>
<h2>Code</h2>
<h3>
    T.C:O(nlogn)<br/>
    S.C:O(1)
</h3>
<pre className="code">
  {
    `
    int findDuplicate(vector<int>& nums) {
      int l = 1, r = nums.size() - 1;
      while (l < r) {
          int m = l + (r - l) / 2, n = 0;
          for (int num : nums) {
              n += num <= m;
          }
          n <= m ? l = m + 1 : r = m;
      }
      return l;
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

export default a_1;
