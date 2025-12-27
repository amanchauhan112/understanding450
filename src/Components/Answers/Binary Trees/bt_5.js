
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Create a mirror tree from the given binary tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Create a new tree, left of original is right of new tree and vice-versa.</p>
   <h2>Code</h2>
{/* 
        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3> */}

        <pre className="code">
          {`
void mirrorify(node* root, node** mirror)
{
    if (root == NULL) {
        mirror = NULL;
        return;
    }
 
    // Create new mirror node from original tree node
    *mirror = createNode(root->val);
    mirrorify(root->left, &((*mirror)->right));
    mirrorify(root->right, &((*mirror)->left));
}
            `}
        </pre>
<h2>Approach 2:</h2>
<p>Swap left and right child.</p>
<pre className="code">
  {
      `
treenode* mirrorTree(node* root)
{
    if (root == NULL)
        return root;
        
    node* t = root->left;
    root->left = root->right;
    root->right = t;
 
    if (root->left)
        mirrorTree(root->left);
    if (root->right)
        mirrorTree(root->right);
   
  return root;
}
      `
  }
</pre>
      </div>


    </div>
  );
};

export default BT;
