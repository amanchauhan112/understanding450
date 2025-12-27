
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check if Tree is Isomorphic </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First check both tree doesn't exist : return true</p>
<p>Check if only one of them exist or root data not equal : return false</p>  
<p>then recursively check it for : left of both , right of both , left of first and right of second , right of first and left of second.</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
    bool isIsomorphic(Node *root1,Node *root2)
    {
    //add code here.
    
    if(!root1&&!root2)
        return true;

    if(!root1||!root2)
        return false;

    if(root1->data!=root2->data)    
        return false;
    
    return (isIsomorphic(root1->left,root2->left)&&
    isIsomorphic(root1->right,root2->right)||
    isIsomorphic(root1->left,root2->right)&&
    isIsomorphic(root1->right,root2->left));

    }
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
