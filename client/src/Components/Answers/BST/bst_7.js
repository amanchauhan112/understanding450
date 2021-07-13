
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Lowest Common Ancestor in a BST </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

   <h2>Code</h2>

        <h3>
          T.C:O(h)
          <br />
          S.C:O(h)
        </h3>

        <pre className="code">
          {`

Node* LCA(Node *root, int n1, int n2)
{
   //Your code here
   
   if(!root)
    return NULL;
   
   if(root&&root->left&&root->data>n1&&root->data>n2)
   {
       return LCA(root->left,n1,n2);
   }
   
   
   else if(root&&root->right&&root->data<n1&&root->data<n2)
   {
      return LCA(root->right,n1,n2);
   }
    

    return root;
     
}



            `}
        </pre>
<h2>Iterative:</h2>
<h2>S.C: O(1) </h2>
<pre>
  {
    `
    while (root != NULL)
    {
        if (root->data > n1 && root->data > n2)
        root = root->left;
 
        else if (root->data < n1 && root->data < n2)
        root = root->right;
 
        else break;
    }
    return root;
    `
  }
</pre>
      </div>


    </div>
  );
};

export default BST;
