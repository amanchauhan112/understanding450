
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Sum Tree or not</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>For each element we are checking if its data equal to left and right child sum or not.</p>
<h2>Keep in mind:</h2>
1) If the node is a leaf node then the sum of the subtree rooted with this node is equal to the value of this node. <br/>
2) If the node is not a leaf node then the sum of the subtree rooted with this node is twice the value of this node.
 
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   bool isLeaf(Node* root)
   {
   return (root->left==NULL&&root->right==NULL);
   }

   bool isSumTree(Node* root)
   {
        // Your code here
        
       if(!root||isLeaf(root))
           return 1;
           
       int ls,rs;
       
       if(isSumTree(root->left)&&isSumTree(root->right))
       {
           if(!root->left)
               ls=0;
           else if(isLeaf(root->left))
               ls=root->left->data;
           else
               ls=2*root->left->data;
          
           if(!root->right)
               rs=0;
           else if(isLeaf(root->right))
               rs=root->right->data;
           else
               rs=2*root->right->data;
           
           return (root->data==ls+rs);    
       }
  
       return 0;
   }
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
