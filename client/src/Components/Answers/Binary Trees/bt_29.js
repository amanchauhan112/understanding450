
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Maximum sum of nodes in Binary tree such that no two are adjacent</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Here, we are taking sum including curr node as(incl) and excluding curr node as (excl)</p>
 <p>Now incl will be sum of node and grandchildren nodes(i.e. not including its child) and excl is sum of child only</p> 
 <p>From both sum,find max and save it in map.(Bcz we need to check sum of all subtrees)</p>


   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
int sumOfGrandChildren(node* node, map<struct node*, int>& mp)
{
      int sum = 0;
    
      if (node->left)
           sum += getMaxSumUtil(node->left->left, mp) +
                  getMaxSumUtil(node->left->right, mp);
    
      if (node->right)
           sum += getMaxSumUtil(node->right->left, mp) +
                  getMaxSumUtil(node->right->right, mp);
    
      return sum;
}
    
int getMaxSumUtil(node* node, map<struct node*, int>& mp)
{
       if (node == NULL)
           return 0;
    
       if (mp.find(node) != mp.end())
           return mp[node];
    
      int incl = node->data + sumOfGrandChildren(node, mp);
      int excl = getMaxSumUtil(node->left, mp) 
                +getMaxSumUtil(node->right, mp);
    
       mp[node] = max(incl, excl);
       return mp[node];
}

int getMaxSum(node* node)
{
    if (node == NULL)
        return 0;
    map<struct node*, int> mp;
    return getMaxSumUtil(node, mp);
}
            `}
        </pre>
        Solution without map given <a href="https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/">here</a>
  </div>


    </div>
  );
};

export default BT;
