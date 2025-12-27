
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Diameter of Binary Tree </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Here , we are calculating (height of left and right subtree +1 )and checking for each node and return whose value of this is max. </p>
   <h2>Code</h2>

        <h3>
          T.C:O(n^2)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   int height(struct Node* node)
   {
    // code here 
    if(!node)
        return 0;
    else
        return (max(height(node->left),height(node->right))+1);
    }

int diameter(Node* root)
{
// Your code here

if(!root)
    return 0;
else
{
    int op2=diameter(root->left);
    int op3=diameter(root->right);

    //return max of height or left diameter or right diameter
    return (max(
            (height(root->left)+height(root->right)+1),
            max(op2,op3)
                ));
}
return 0;

    
}
            `}
      </pre>

<h2>O(n) Solution:</h2>
<pre className="code">
  {
    `
int height(Node* root, int& ans)
{
    if (root == NULL)
        return 0;
 
    int left_height = height(root->left, ans);
 
    int right_height = height(root->right, ans);

    ans = max(ans, 1 + left_height + right_height);
 
    return 1 + max(left_height, right_height);
}
 
/* Computes the diameter of binary tree with given root. */
int diameter(Node* root)
{
    if (root == NULL)
        return 0;
    int ans = INT_MIN; // This will store the final answer
    height(root, ans);
    return ans;
}
    `
  }
  {/* {
    `
int diameterOpt(struct node* root, int* height)
{
    int lh = 0, rh = 0;

    int ldiameter = 0, rdiameter = 0;
 
    if (!root) {
        *height = 0;
        return 0; // diameter is also 0 
    }
 
    ldiameter = diameterOpt(root->left, &lh);
    rdiameter = diameterOpt(root->right, &rh);
 
    *height = max(lh, rh) + 1;
 
    return max(lh + rh + 1, max(ldiameter, rdiameter));
}
    `
    https://www.geeksforgeeks.org/diameter-of-a-binary-tree/
  } */}
</pre>
      </div>


    </div>
  );
};

export default BT;
