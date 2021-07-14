
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Lowest Common Ancestor in a Binary Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Check recursively, if left and right both exist,return root else return that node that exist.</p>
  <p><h3>Note:</h3>When left and right will be found,root will be return , the root is the node form where we foung our left and right child and hence it is LCA</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
    Node* LCA(Node*root,int n1,int n2)
    {
        
        if(!root)
            return NULL;
          
        if(root->data==n1||root->data==n2)
            return root;
            
        Node* left= LCA(root->left, n1,n2);
        Node* right=LCA(root->right,n1,n2);
        
        if(left&&right)
            return root;
        
        return (right?right:left);    //can take either left or right
        
    }
    
    Node* lca(Node* root ,int n1 ,int n2 )
    {
       //Your code here 

        if(!root)
            return root; 
        
        return LCA(root,n1,n2);       
   
    }
            `}
        </pre>
        More Solutions given <a href="https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/">here</a>
  </div>


    </div>
  );
};

export default BT;
