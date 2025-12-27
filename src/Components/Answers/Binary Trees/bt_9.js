
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Left View of Binary Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Do <a href="/bt_1">Level Order Traversal</a> and print first node of each level</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
vector<int> leftView(Node *root)
{
   // Your code here
       vector<int>ans;
   if(!root)
    return ans;
    
    queue<Node*>q;


    q.push(root);
    Node*temp;
    int f=0,count=0;
    
    while(!q.empty())
    {
        count=q.size();
        while(count--)
        {
            temp=q.front();
            q.pop();
            
            if(f==0)
                ans.push_back(temp->data);
            f++;
            
            if(temp->left)
                q.push(temp->left);
            if(temp->right)
                q.push(temp->right);
        }
        f=0;
    }

}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
