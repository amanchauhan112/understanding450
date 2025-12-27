
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Count BST nodes that lie in a given range</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>Simply traversing and counting.It's BST , so use it for optimizing the solution.</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(h)
        </h3>

        <pre className="code">
          {`
void inorder(Node*root,int l,int h,int &ans)
{
    if(!root)
        return;
    
    inorder(root->left,l,h,ans);

    if(root->data>=l&&root->data<=h)
        ans++;

    inorder(root->right,l,h,ans);    
}

int getCount(Node *root, int l, int h)
{
  // your code goes here   

  int count=0;
  
  if(h<root->data)  
    inorder(root->left,l,h,count);

  else if(l>root->data)
    inorder(root->right,l,h,count);

  else    
    inorder(root,l,h,count);

  return count;
}

            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
