
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Kth Largest element</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>We sre travering in inorder manner and keeping track of in counter variable.When counter equal to k , print it.</p>
   <p>We are traversing right first as we want in decreasing order</p>
   
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(h)
        </h3>

        <pre className="code">
          {`
    void findKth(Node*root,int k,int &h,int&ans)
    {
        if(!root||k<=h)
            return;
            
        findKth(root->right,k,h,ans); 
        h++;
        if(k==h)
        {
        ans=root->data;
        return;
        }
                  
        findKth(root->left,k,h,ans);
    }
    
    int kthLargest(Node *root, int K)
    {
        //Your code here
        
        int h=0,ans;
        findKth(root,K,h,ans);
        return ans;

    }
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
