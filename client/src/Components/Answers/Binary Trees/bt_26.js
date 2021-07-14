
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Sum of the Longest Bloodline of a Tree </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Keep track of level of each node,max level and sum </p>
<p>If current node is leaf node, check if lvl greater than max level : make it max lvl and also update max_sum</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
void findSum(Node*root,int & max_sum,int &max_lvl,int sum,int lvl)
   {
       if(!root)
           return;
       
       sum+=root->data;

       lvl++;
       
       if(!root->right&&!root->left)
       {
           if(lvl>max_lvl)
           {
               max_lvl=lvl;
               max_sum=sum;
           }
           
           if(lvl==max_lvl&&sum>max_sum)
               max_sum=sum;
            
       }
       
       findSum(root->left,max_sum,max_lvl,sum,lvl);    
       findSum(root->right,max_sum,max_lvl,sum,lvl); 
       
   }
   
   int sumOfLongRootToLeafPath(Node* root)
   {
     // Code here
     
     int max_sum=0,max_lvl=0;
     findSum(root,max_sum,max_lvl,0,0);
     return max_sum;
   }
            `}
        </pre>
        One more solution given <a href="https://www.geeksforgeeks.org/sum-nodes-longest-path-root-leaf-node/">here</a>
  </div>


    </div>
  );
};

export default BT;
