import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find the middle element of a stack</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<h2>There can be many ways :</h2>
<p>We can use another stack , count numbers and print n/2 th number</p>
<p>We can store in array and print n/2th number</p>

<h2>Efficient Approach</h2>
<p>We need to design our stack in such a way so that we can have our mid</p>
<p>So, while pushing elements,if size is odd :increment mid else:keep same position</p>

<h2>Example:</h2>
<p>We will insert 1 2 3 4</p>
<p>Initialize mid as -1</p>
<p>Push 1: size is odd , increment mid (mid at 1) </p>
<p>Push 2 :size even , do nothing(mid at 1)</p>
<p>Push 3: size odd , increment mid(mid at 2)</p>
<p>Push 4: size even do nothing(mid at 2)</p>

<p>Each time mid will be at middle element.</p>
      </div>
    </div>
  );
};

export default sq;
