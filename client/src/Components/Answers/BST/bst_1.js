
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Binary Search Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>Left side of root contains elements less than root and right side contains elements greater than root.</p>
       <p> Inorder traversal produces sorted order elements in BST</p>
        <p>In BST, we will use recursion in most of the solutions as it is easier to implement.</p>
   <h2>Code</h2>

        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3> */}

<h2>Seacrh a key in BST:</h2>
        <pre className="code">
          {`
struct node* search(struct node* root, int key)
{
	// Base Cases
	if ( !root || root->key == key)
		return root;

	if (root->key < key)
	return search(root->right, key);

	return search(root->left, key);
}
            `}
        </pre>

<h2>Insert key in BST:</h2>
<p>Insert in left if key is less than root else insert in right of root.</p>
<pre>
    {
        `
BST* BST ::Insert(BST* root, int value)
{
    if (!root)
    {
        return new BST(value);
    }
 

    if (value > root->data)
    {
        root->right = Insert(root->right, value);
    }
    else
    {
        root->left = Insert(root->left, value);
    }

    return root;
}
        `
    }
</pre>



      </div>


    </div>
  );
};

export default BST;
