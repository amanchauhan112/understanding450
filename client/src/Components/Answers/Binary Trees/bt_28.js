
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find largest subtree sum in a tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are taking an ans variavle to store final answer</p>
<p>Recursively check max between curr sum(root+left child+right child) and previous ans,store it in answer variable and in the end return it</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   int findLargestSubtreeSumUtil(Node* root, int& ans)
   {
       if (root == NULL)    
           return 0;

       int currSum = root->key +
         findLargestSubtreeSumUtil(root->left, ans)
         + findLargestSubtreeSumUtil(root->right, ans);

       ans = max(ans, currSum);

       return currSum;
   }
    

int findLargestSubtreeSum(Node* root)
{
    if (root == NULL)    
        return 0;
        
    int ans = INT_MIN;
    findLargestSubtreeSumUtil(root, ans);
    return ans;
}
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
