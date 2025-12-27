
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Predecessor and Successor</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Inorder Traversal gives us sorted order so, we need to find just smaller and just larger element of key.</p>
<p>We can do that by finding max in left tree and min in right tree to key value</p>
<p>For this, just do inorder traversal of tree,if root less than key make it predecessor else if greater, successor</p>
   <p>Also check if successor is found or not as inorder traversal will trave all greater elements </p>
   
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

  void findPreSuc(Node* root, Node*& pre, Node*& suc, int key)
  {

    // Your code goes here

    if(!root)
        return;
        
    findPreSuc(root->left,pre,suc,key);

    if(root->key < key )
      pre=root;
    if(root->key > key && suc==0 )
      suc=root;

    findPreSuc(root->right,pre,suc,key);

  }
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
