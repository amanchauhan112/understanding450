import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Find in more detail <a href="https://www.geeksforgeeks.org/quick-sort-vs-merge-sort/#:~:text=But%20it%20can%20be%20made%20stable%20using%20some,%28in%20many%20cases%20like%20in%20virtual%20memory%20environment%29." >here</a></h1>


<pre className="code">
{
`
Quicksort exhibits good cache locality and 
this makes quicksort faster than merge sort 
(in many cases like in virtual memory environment).
For arrays, merge sort loses due to the use of extra O (N) storage space. 
Most practical implementations of Quick Sort use randomized version. 
The randomized version has expected time complexity of O (nLogn).
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
