
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Duplicate subtree in Binary Tree </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Store in map , for each substring,if more than one return true.</p>
  <p>Here we are counting NULL for size of subtree , so check size{">"}3 while iterating map.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(h)
        </h3>

        <pre className="code">
          {`
   string check(Node*root,unordered_map<string,int>&mp)
   {
       string s="";
       
       if(!root)
       {
           s+="$";
           return s;
       }
       s="";
       s+=root->data;
       
       string left=check(root->left,mp);
      
       string right=check(root->right,mp);
       s+=left+right;
       mp[s]++;
       
       return s;
       
   }
   
   bool dupSub(Node *root)
   {
        //your code here
        
        unordered_map<string,int>mp;

        check(root,mp);
        
        for(auto i:mp)
           if(i.second>1&&i.first.length()>3)
               return 1;
       
       return 0;        
        
        
   }
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
