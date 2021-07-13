
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Preorder Traversal</h1>
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
void preorder(Node* root)
{
    if (root == nullptr) 
        return;

    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}
            `}
        </pre>
<h2>Iterative</h2>
<p>Print element as it goes in stack , then push it's right and then left child.(As , in stack, left is pushed later , so after root, left child will be printed first and then right).</p>
<pre className="code">
  {
    `
void preorderIterative(Node* root)
{

    if (root == nullptr)
      return;
 
    stack<Node*> stack;
    stack.push(root);
 
    while (!stack.empty())
    {
        Node* curr = stack.top();
        stack.pop();
 
        cout << curr->data << " ";
 
        if (curr->right) {
            stack.push(curr->right);
        }
 
       if (curr->left) {
            stack.push(curr->left);
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
