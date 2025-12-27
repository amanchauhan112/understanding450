
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Flatten BST</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are traversing in inorder manner and connecting bst like linked list </p>
<p>Initially create a dummy node and a pointer to it,connect it to current and make pointer to current</p>
<p>Do it till all nodes traversed , In the end return right of dummy </p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
void inorder(node* curr, node*& prev)
{

    if (curr == NULL)
        return;

    inorder(curr->left, prev);

    prev->left = NULL;
    prev->right = curr;
    prev = curr;

    inorder(curr->right, prev);
}

node* flatten(node* parent)
{

    node* dummy = new node(-1);
 
    node* prev = dummy;
 
    inorder(parent, prev);
 
    prev->left = NULL;
    prev->right = NULL;

    node* ret = dummy->right;
    delete dummy;
    return ret;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
