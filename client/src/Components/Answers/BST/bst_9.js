
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Binary Tree to BST</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Idea is to copy all elements and sort it , then using inorder traversal push them back</p>
   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`

//store elements in set :
void storeinorderInSet(Node* root, set<int>& s)
{
    if (!root)
        return;
 
    storeinorderInSet(root->left, s);
 
    // insertion takes order of O(logn) for sets
    s.insert(root->data);
 
    storeinorderInSet(root->right, s);
 
} // Time complexity  = O(nlogn)
 
//insert back in BST from set using inorder traversal:
void setToBST(set<int>& s, Node* root)
{
    if (!root)
        return;

    setToBST(s, root->left);

    auto it = s.begin();
    root->data = *it;
    s.erase(it);
 
    setToBST(s, root->right);
 
}
 

void binaryTreeToBST(Node* root)
{
    set<int> s;

    storeinorderInSet(root, s);
 
    // now sets are by default sorted 
    //as they are implemented using self-balancing BST

    setToBST(s, root);
 
}
 
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
