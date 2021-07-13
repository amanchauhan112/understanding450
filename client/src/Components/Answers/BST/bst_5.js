
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check for BST</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Just check if all elements are lesser in left and larger in right subtree of root.</p>
<p>We can also do inorder traversal and check if sorted or not</p>

   <h2>Code</h2>


        <pre className="code">
          {`
 bool islesser(Node*root,int &key)
 {
     if(!root)
         return true;
     islesser(root->left,key);
     if(root->data>=key)
         return false;  
     islesser(root->right,key);  
     

 }
 
 bool isgreator(Node*root,int& key)
 {
     if(!root)
         return true;
     isgreator(root->left,key);
     if(root->data<=key)
         return false;
     isgreator(root->right,key);   

 }
 bool isBST(Node* root) 
 {
     // Your code here
     if(!root)
         return true;
         
     return (
         islesser(root->left,root->data)&&
         isgreator(root->right,root->data)&&
         isBST(root->left)&&isBST(root->right)
         );
         
     
     
     
 }
            `}
        </pre>
<h2>Efficient Approach:</h2>
<p>In above Approach , we are traversing again and again and each node is traversed many times</p>
<p>Here,we will be traversing only once.</p>


<h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

<pre className="code">
  {
    `
    bool isBSTUtil(Node* root, Node* l=NULL, Node* r=NULL)
{
    // Base condition
    if (root == NULL)
        return true;

    //left node's data should be less than root's data
    if (l != NULL and root->data <= l->data)
        return false;

    //right node's data should be greater than root's data
    if (r != NULL and root->data >= r->data)
        return false;

    // check recursively for every node.
    return isBSTUtil(root->left, l, root) && isBSTUtil(root->right, root, r);
}
    bool isBST(Node* root) 
    {
        // Your code here
        
        return(isBSTUtil(root, NULL, NULL)); 
    }
    `
  }
</pre>
      </div>


    </div>
  );
};

export default BST;
