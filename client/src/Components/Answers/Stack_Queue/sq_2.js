import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Queue Implementation</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
      <p>Maintain front and rear at -1</p>
      <p>Push: if(Empty) : front =rear=0 ,arr[rear]=element , else : arr[rear++]=element  and size++</p>
      <p>Pop: if(!Empty) : arr[front++] and size-- </p>

      </div>
    </div>
  );
};

export default sq;
