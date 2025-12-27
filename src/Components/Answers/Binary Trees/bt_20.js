
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Binary Tree using Preorder and Inorder</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Create node using first element of preorder array</p>
 <p>Find this element index in inorder(Eg. i)</p>
 <p>Now, recursively do this.</p>
 <p>From low to i-1  in preorder array == make it left child</p>
 <p>From i+1 to h in preorder array == make it  right child of root</p>
  <p><h4>Note:</h4>We can store inorder elements with index in a map for simplicity.</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
    Node*construct(int in[],int pre[],int l,int h,int&preIndex)
    {    
      if(l > h)
        return NULL;
        
      Node* root = new Node(pre[preIndex++]);
    
      if(l == h)
         return root;
        
      int i;

      for(i=l;i<=h;i++)
        if(root->data == in[i])
            break;
            
      if(i <= h)
      {
        root->left = construct(in, pre, l, i-1,preIndex);
        root->right = construct(in, pre, i+1, h,preIndex);
      }
    
      return root;
    }
    
    Node* buildTree(int in[],int pre[], int n)
    {
        // Code here

        int preIndex=0;
        return construct(in,pre,0,n-1,preIndex);    
    }
            `}
        </pre>
Few more solutions <a href="https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/">here</a>.
    <br/>
    Also check:<a href="https://www.cdn.geeksforgeeks.org/construct-a-binary-tree-from-postorder-and-inorder/">Binary tree using Postorder and Preorder</a>.
      </div>


    </div>
  );
};

export default BT;
