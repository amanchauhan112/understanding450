
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check whether BST contains Dead End</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>We can store elements , sort them and check if difference is 1 or not(between adjacent elements)</p>
        <p>Below is another approach:</p>
        <p>Dead End will occur if any element equal to 1 or difference in two elements of same branch is 1</p>
   <p>We take l and r variables for lower and upper limit respectively</p>
   <p>while traversing right side,increment l by 1 ,else: decrement r by one</p>


   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
  void traverse(Node*root,int &b,int l,int r)
  {
      if(!root)
          return;
      
      if(r==1||l==r)
          b=1;  
      
      traverse(root->left,b,l,root->data-1);
      traverse(root->right,b,root->data+1,r);
      
  }

  bool isDeadEnd(Node *root)
  {
      //Your code here
      int b=0;
      traverse(root,b,INT_MIN,INT_MAX);
      return b;
  }
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
