
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading" style={{display:"block"}}>
        <h1>1.Valid preorder</h1>
        <h1>2.Preorder to postorder</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <h2>1.Valid Preorder:</h2>
        <p>To check if given array is preorder or not,first find starting of right subtree(when curr element less than next element)</p>
  <p>Now for complete left subtree , check if all elements less than root</p>
  <p>Similarly, for complete right subtree , check if all elements greater than root</p>
 <p>Repeat above steps , till each subtree traversed</p>
 
 <p>Check few solutions <a href="https://www.geeksforgeeks.org/check-if-a-given-array-can-represent-preorder-traversal-of-binary-search-tree/">here</a></p>
  
  
  <h2>2.Preorder to Postorder </h2>
  <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
Node* insert(Node*root,int val)
{
    if(!root)
       return newNode(val);
       
    if(val>root->data)
      root->right=insert(root->right,val);
      
    else if(val<root->data)
       root->left=insert(root->left,val);
        
    return root;
}


Node* constructTree(int pre[], int size) {
    //code here

      int n=size-1;
      
      Node*root=newNode(pre[0]);

      int i=1;
    
    while(i<=n)
    {
        insert(root,pre[i]);
        i++;
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
