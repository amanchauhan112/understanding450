
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Delete-node-in-a-bst</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>As , left is smaller and right is bigger in bst, traverse accordingly to reach key value</p>

<h2>3 Cases:</h2>
<p>1.No child or No left child :return right ( If no child : NULL , else: right element ) </p>
<p>2.No right child : return left child</p>
<p>3.Both child : find minimum in right side or max in left and return it.</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
TreeNode*min(TreeNode*root)
{
    while(root->left)
        root=root->left;    
    
    return root;
}

TreeNode* deleteNode(TreeNode* root, int key) {
    if(!root)
           return NULL;
    
    if(key<root->val)
        root->left=deleteNode(root->left,key);
    else if(key>root->val)
        root->right=deleteNode(root->right,key);  
    else
    {

      if(!root->left)
        {
            return root->right;    
        }
        else if(!root->right)
        {
            return root->left; 
        }
        else
        {            
            TreeNode*temp=findMin(root->right);
            root->val=temp->val;
            root->right=deleteNode(root->right,root->val);
        }
   
    }

    
    return root;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
