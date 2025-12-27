
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Convert Binary tree into Sum tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Traverse in postorder manner and add left and right nodes value  to root </p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(h)
        </h3>

        <pre className="code">
          {`
 int postorder(Node*node)
 {
     if(!node)
         return 0;
     
     int d=node->data;
         
     int lsum=postorder(node->left);
     int rsum=postorder(node->right);
     
     node->data=lsum+rsum;
     return d+lsum+rsum;
 }
 
 void toSumTree(Node *node)
 {
     // Your code here
     
     postorder(node);
 
 }
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
