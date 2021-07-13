
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Minimum element in BST</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Leftmost element is minimum and rightmost is maximum element
</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

    int minValue(Node* root)
    {
      // Code here  
    
      if(!root->left)
        return root->data;   
      
      minValue(root->left); 
    }
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
