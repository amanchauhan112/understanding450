
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check for Balanced Tree </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Calculate height difference , if more than 1,not balanced.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(h)
        </h3>

        <pre className="code">
          {`
int height(Node*root)
{
    if(!root)
        return 0;
        
    int hl=height(root->left);
    if(hl==-1)
        return -1;
        
    int hr=height(root->right);
    if(hr==-1)
        return -1;
    
    
    if(abs(hl-hr)>1)
        return -1;
    else    
        return 1+max(hl,hr);

}

bool isBalanced(Node *root)
{
    //  Your Code here

    if(height(root)==-1)
        return false;
    return true ;    
}

            `}
        </pre>
<h2>O(n) Approach:</h2>
<pre className="code">
  {
    `
    bool isBalanced(node* root, int* height)
{

    int lh = 0, rh = 0;

  /* l will be true if left subtree is balanced 
  and r will be true if right subtree is balanced */
  int l = 0, r = 0;

  if (root == NULL) 
  {
        *height = 0;
        return 1;
  }

  /* Get the heights of left and right subtrees in
  lh and rh and store the returned values in l and r */
  l = isBalanced(root->left, &lh);
  r = isBalanced(root->right, &rh);

  *height = (lh > rh ? lh : rh) + 1;

  if (abs(lh - rh) >= 2)
      return 0;

  else
      return l && r;
}
    `
  }
</pre>
      </div>


    </div>
  );
};

export default BT;
