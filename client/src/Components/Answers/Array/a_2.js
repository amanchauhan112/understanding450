import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div className="ans_heading">

         <h1 >Maximum and minimum of an array using minimum number of comparisons</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>

Pair MaxMin(array, array_size)
   if array_size = 1<br/>
      return element as both max and min<br/>
   else if arry_size = 2<br/>
      one comparison to determine max and min<br/>
      return that pair<br/>
   else  <br/>
      recur for max and min of left half<br/>
      recur for max and min of right half<br/>
      one comparison determines true max of the two candidates<br/>
      one comparison determines true min of the two candidates<br/>
      return the pair of max and min<br/>
</p>
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<pre className="code">
  {
    `
struct Pair getMinMax(int arr[], int low,int high)
{
struct Pair minmax, mml, mmr;    
int mid;

// If there is only one element
if (low == high)
{
minmax.max = arr[low];
minmax.min = arr[low];    
return minmax;
}

// If there are two elements
if (high == low + 1)
{
if (arr[low] > arr[high])
{
minmax.max = arr[low];
minmax.min = arr[high];
}
else
{
minmax.max = arr[high];
minmax.min = arr[low];
}
return minmax;
}

// If there are more than 2 elements
mid = (low + high) / 2;
mml = getMinMax(arr, low, mid);
mmr = getMinMax(arr, mid + 1, high);

// Compare minimums of two parts
if (mml.min < mmr.min)
minmax.min = mml.min;
else
minmax.min = mmr.min;    

// Compare maximums of two parts
if (mml.max > mmr.max)
minmax.max = mml.max;
else
minmax.max = mmr.max;    

return minmax;
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
