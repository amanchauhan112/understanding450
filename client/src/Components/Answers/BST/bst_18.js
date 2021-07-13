
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Given n appointments, find all conflicting appointments</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

        <p>Here  we are going to take help of Interval Trees(Check <a href="https://www.geeksforgeeks.org/interval-tree/">here</a>)</p>
   <p>Below we have two functions</p>
   <p>doOverlap : checks if two intervals overlaps or not by checking their low and high</p>
   <p>overlapSearch : search in tree for overlapping intervals for each element in array.</p>
<p>Initially, insert first element of array in BST, then iterate for all other elements</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n^2)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
bool doOVerlap(Interval i1, Interval i2)
{
    if (i1.low < i2.high && i2.low < i1.high)
        return true;
    return false;
}

Interval *overlapSearch(ITNode *root, Interval i)
{

    if (root == NULL) 
        return NULL;
 

    if (doOVerlap(*(root->i), i))
        return root->i;
 

    if (root->left != NULL && root->left->max >= i.low)
        return overlapSearch(root->left, i);
 
    return overlapSearch(root->right, i);
}
 
            `}
        </pre>
Check <a href="https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/">here</a> for complete solution.
      </div>


    </div>
  );
};

export default BST;
