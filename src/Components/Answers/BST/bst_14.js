
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Count pairs in two BST whose sum equal to X</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>We are using map and checking while traversing second tree that ,if X-n2 present in map</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
void inorder(Node*root,map<int,int>&m)
{
    if(!root)
        return;
    
    inorder(root->left,m);
    m[root->data]++;
    inorder(root->right,m);
    
}

void finder(Node*root,map<int,int>&m,int&x,int&count)
{
    if(!root)
        return;
    
    finder(root->left,m,x,count);
    if(m[x-root->data]>0)
        count++;
    finder(root->right,m,x,count);    
    
}

int countPairs(Node* root1, Node* root2, int x)
{
    // Code here
    
    map<int,int>m;
    inorder(root1,m);
    int count=0;
    finder(root2,m,x,count);
    return count;
    
}
            `}
        </pre>
<p>More solutions are given <a href="https://www.geeksforgeeks.org/count-pairs-from-two-bsts-whose-sum-is-equal-to-a-given-value-x/">here</a></p>
      </div>


    </div>
  );
};

export default BST;
