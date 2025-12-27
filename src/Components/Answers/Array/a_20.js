import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Alternate positive and negative</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>

<a href="https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/">Here</a> we have two approaches given.
</p>
<p>Basic Idea is:<br/>
    We are going to store negative value on even index and positive on odd index. </p>
    <p>We can use two pointes and we will use them to traverse array and swap positive and negative elements according to requirements.</p>

    </div>
</div>

  </div>
        </div>
    )
}

export default a
