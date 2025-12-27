
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Postorder traversal</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
void postorder(Node* root)
{

    if (root == nullptr) {
        return;
    }
 
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}
 
            `}
        </pre>
<h2>Iterative:</h2>
<p>Here, we need to use another stack , as we will print root last.</p>
<p>As an element enters stack, push it into another stack(out stack in below code) by popping it from curr stack, and push its left & right in curr stack</p>
<p>We can't print it directly as we print root element in last in post order(i.e. Left  Right  Root)</p>

<pre className="code">
  {
`
void postorderIterative(Node* root)
{
    stack<Node*> s;
    s.push(root);
 
    stack<int> out;
 
    while (!s.empty())
    {
        Node* curr = s.top();
        s.pop();
 
        out.push(curr->data);

        if (curr->left) 
            s.push(curr->left);
 
        if (curr->right) 
            s.push(curr->right);
        
    }
 
    while (!out.empty())
    {
        cout << out.top() << " ";
        out.pop();
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
