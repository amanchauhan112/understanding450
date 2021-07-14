
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Top View of Binary Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>Do <a href="/bt_1">Level Order Traversal</a></p>
        <p>For first level, insert 0 and root-data in queue</p>
        <p>Insert in map if m[q.front().first] not already present</p>

<p>Then , for left child decrement 1 , for right , increment 1 of first of each element of queue.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
 vector<int> topView(Node *root)
 {
     map<int,int>m;
     
     queue<pair<int,Node*>>q;
     
     vector<int>ans;
     
     if(!root)
         return ans;
     
     q.push({0,root});
     
     while(!q.empty())
     {
         
         pair<int,Node*>i;
         
         i=q.front();
         q.pop();
         
         int hd=i.first;
         Node*temp=i.second;
         
         // if not seen before
    
          if (m.count(hd) == 0)
             m[hd] = temp->data;
         
         if(temp->left)
             q.push({hd-1,temp->left});
         if(temp->right)
             q.push({hd+1,temp->right});
     }
     

 auto p=m.begin();
 
 while(p!=m.end())
 {
     cout<<p->second<<" ";
     p++;
 }

 }

            `}
        </pre>
Few more approaches given <a href="https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/">here</a>
      </div>


    </div>
  );
};

export default BT;
