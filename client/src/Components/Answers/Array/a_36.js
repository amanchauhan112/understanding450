import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Median of two sorted arrays of different sizes</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p><a href="https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/">Here</a> we have an Efficient Solution using O1 space and O(min(logm,logn)) time</p>
<p>Other solutions are:</p>
<h2>Solution 1:</h2>
<p>Create new array with all elements of arr1 and arr2</p>
<p>Sort this new array and find median of it.</p>

<h2>Solution 2:</h2>
<p>First <a href="https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1">Sort both array without using extra space</a></p>
<p>Find median assuming them as one array.</p>

    </div>
</div>

  </div>
        </div>
    )
}

export default a
