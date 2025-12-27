
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Construct BST from given preorder traversal</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>A Simple Solution: can be to first create root as first element of array then make left till first greater and right child afterwards</p>
<p>That will take O(n^2) time , but we will do in O(n) time.</p>
<p>The basic idea is to check for each node if it is in range of min and max,make it as root</p>
<p>We are traversing element using a pointer and keep incrementing it</p>
<p>Now if curr element lesser: make it left child , else:right child</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

    //Initially min max is INT_MIN and INT_MAX
    node* constructTreeUtil(int pre[], int* preIndex, int key,int min, int max, int size)
    {

    if (*preIndex >= size)
      return NULL;

    node* root = NULL;

    if (key > min && key < max) {

    root = newNode(key);
    *preIndex = *preIndex + 1;

    if (*preIndex < size)
    {
      root->left = constructTreeUtil(pre, preIndex,pre[*preIndex],min, key, size);
    }
    if (*preIndex < size)
    {
      root->right = constructTreeUtil(pre, preIndex,pre[*preIndex],key, max, size);
    }

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
