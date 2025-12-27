import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Stack Implementation</h1>
      </div>
<br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Take an array and place top at -1</p>
<p>Push : make top++ and arr[top]=element</p>
<p>Pop: print arr[top] and make top--</p>
<p>Empty: top==-1 and Full: top=arrSize-1 and Peek: arr[top]</p>

      </div>
    </div>
  );
};

export default sq;
