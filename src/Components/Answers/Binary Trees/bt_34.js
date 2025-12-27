
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Duplicate Subtrees</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>First we need to find duplicate subtree exist or not : ( Check <a href="/bt_24">here</a> ).</p>
<p>Update map for each duplicate subtree, and add it to vector once.In the end print them.</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   string printDup(Node*root,unordered_map<string,int>&mp,vector<int>&v)
   {
       
       string s;
       
       if(!root)
       {
           return ""; 
       }
       
       s+=to_string(root->data);
       
       string left=printDup(root->left,mp,v);
      
       string right=printDup(root->right,mp,v);
       
       s+=left+right;
   
       if(mp[s]==1)
           v.push_back(root->data);

       mp[s]++;
       return s;
           
   }
   
   void printAllDups(Node* root)
   {
       // Code here
       
       if(!root)
           return;
       
       int flag=0;
       vector<int>v;
       unordered_map<string,int>mp;
       
       printDup(root,mp,v);
       
       if(v.size()==0)
          cout<<-1;
       else
       {
        sort(v.begin(),v.end());

        for(int i=0;i<v.size();i++)
        {
           cout<<v[i]<<" ";
       }
   }    
    
   }
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
