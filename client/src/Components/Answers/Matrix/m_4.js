import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Find row with maximum no. of 1's</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>

  
<p>See the approach <a href="https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/">here</a></p>
 <p>Also checkout video given there ,  as it explains every approach clearly</p>

 <h2>Naive Approach:</h2>
 <p>Basic approach will be to traverse complete matrix and check our condition.</p>
 <p>We can improve it by using binary search instead of linear search.</p>
  
  <h2>Smart approach:</h2>
  <p>In order to utilise given conditions, first check index till which 1 is present</p>
<p>Now , in further rows , only check columns on left of our index found above.</p>

<p>And if we get 1 on 0th column , return that.</p>
</div>

  </div>
        </div>
    )
}

export default a
