
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Bottom View of Binary Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>Do <a href="/bt_1">Level Order Traversal</a></p>
        <p>For first level, insert 0 and root-data in queue</p>
        <p>Insert in map(It will override previous elements till it's bottom element)</p>
        <p>Then , for left child decrement 1 , for right , increment 1 of first of each element of queue.</p>
 
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
 vector <int> bottomView(Node *root) 
    
 {
     // Your Code Here
     
     map<int,int>m;
     
     vector<int>v;
     
     if(!root)
         return v;
         
     queue<pair<int,Node*>>q;
     q.push({0,root});
     
     while(!q.empty())
     {
         pair<int,Node*> temp=q.front();
         q.pop();
         
         int val=temp.first;
         Node*p=temp.second;
         
         m[val]=p->data;
         
         if(p->left)
             q.push({val-1,p->left});
         if(p->right)
             q.push({val+1,p->right});
     }
     
     auto ap=m.begin();
     
     while(ap!=m.end())
     {
         cout<<ap->second<<" ";
         ap++;
     }
     
     return v;
 }
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
