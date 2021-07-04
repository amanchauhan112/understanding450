import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Can we reverse a linked list in less than O(n) ?</h1>
    </div>

    <br></br>
    <div className="solution">

<pre className="code">
{
`
No, we cannot reverse a linked list in O (n) time,
because each pointer must be reversed or values must be interchanged 
to reverse a linked list. To do that we need to reach the last node which
takes a pointer to reach last node which takes O (n) time.
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
