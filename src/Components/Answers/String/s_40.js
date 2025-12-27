import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Function to find Number of customers who could not get a computer</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>We wil keep track of incoming persons , and occupied computers</p>
<p>When person enter, store it in array or map, and decrement idle computers and vice-versa</p>
<p>if idle==0 when a person enters, return false.</p>
 <h2>Code</h2>
 <p>Check here for code : <a href="https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/">Solution</a></p>
    {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
         
            `
        }
        </pre> */}

    </div>


    </div>
  );
};

export default String;