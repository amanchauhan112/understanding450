import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Inserting at the end of stack</h1>
      </div>

<br/>
      <div className="solution">

      <h1>Optimal Approach :</h1>
<p>If stack is empty we will push element</p>
<p>else we will recursively pop stack</p>
<p>When loop terminates , put a push statement that will recursively push back all elements</p>

        <h2>Code</h2>

        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3> */}

        <pre className="code">
          {`
    static void insert_at_bottom(char x){

      if(st.isEmpty())
          st.push(x);
  
      else{
        
          char a = st.peek();
          st.pop();

          insert_at_bottom(x);

          st.push(a);
      }
  }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
