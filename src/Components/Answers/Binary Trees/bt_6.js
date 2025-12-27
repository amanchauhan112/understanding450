
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Inorder Traversal</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

   <h2>Code</h2>
<h2>Recursive:</h2>
        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3> */}

        <pre className="code">
          {`
void inorder(Node* root)
{

    if (!root) 
        return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}
            `}
        </pre>
<h2>Iterative:</h2>
<p>If we have left , go left , else: print left and move right.</p>
<pre className="code">
  {
    `
void inorderIterative(Node* root)
{
    stack<Node*> stack;

    Node* curr = root;
 
    while (!stack.empty() || curr != NULL)
    {
        if (curr != nullptr)
        {
            stack.push(curr);
            curr = curr->left;
        }
        else {
            curr = stack.top();

            stack.pop();

            cout << curr->data << " ";
 
            curr = curr->right;
        }
    }
}
    `
  }
</pre>
      </div>


    </div>
  );
};

export default BT;
