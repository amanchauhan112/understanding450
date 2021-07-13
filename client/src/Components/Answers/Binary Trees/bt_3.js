
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Height of Binary Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are recursively traversing elements , and adding 1 to max of height of left and right subtree.In the end it will give us height of Tree.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
int height(struct Node* node){
  // code here 
  
  if(!node)
      return 0;
  else
  {
      return (max(height(node->left),height(node->right))+1);
  }
  
}

// We can also write else part as: 

// lh=height(node->left);
// rh=height(node->right);

// return max(lh,rh)+1;

            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
