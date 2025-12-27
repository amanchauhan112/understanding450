
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Print all k-sum paths in a binary tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First,push nodes of a path recursively in a vector</p>
<p>Iterate the vector and check if sum==k or not.</p>  

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
void printKPathUtil(Node *root, vector<int>& path,int k)
{

    if (!root)
        return;

    path.push_back(root->data);

    printKPathUtil(root->left, path, k);

    printKPathUtil(root->right, path, k);

    int f = 0;

    for (int j=path.size()-1; j>=0; j--)
    {
    f += path[j];

    if (f == k)
        printVector(path, j);   //(A function to print vector)
    }

    // Remove the current element from the path

    path.pop_back();
}
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
