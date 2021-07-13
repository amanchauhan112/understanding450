
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Replace every element with the least greater element on its right</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>Apart from using two loops, insert elements in BST from right to left , if inorder successor exist, print it.</p>
   <p>Create an insert function to insert nodes according to BST , if curr node data greater than curr arr[i] , then curr node is successor.</p>
   
   <h2>Code</h2>

        <h3>
          T.C:O(n^2)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
Node* insert(Node* node, int data, Node*& succ)
{
     
    if (node == NULL)
        return node = newNode(data);
 
    if (data < node->data) {
        succ = node;
        node->left = insert(node->left, data, succ);
    }
 
    else if (data > node->data)
        node->right = insert(node->right, data, succ);

    return node;
}
 
void replace(int arr[], int n)
{
    Node* root = NULL;
 
    for (int i = n - 1; i >= 0; i--) 
    {
        Node* succ = NULL;
 
        root = insert(root, arr[i], succ);

        if (succ)
            arr[i] = succ->data;
        else
            arr[i] = -1;
    }
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
