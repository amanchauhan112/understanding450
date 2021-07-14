
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Distance between two nodes</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We are finding distance from LCA of both a and b and return it's sum.</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   Node* LCA(Node*root,int n1,int n2)
   {
       
       if(!root)
           return NULL;
         
       if(root->data==n1||root->data==n2)
           return root;
           
       Node* left= LCA(root->left, n1,n2);
       Node* right=LCA(root->right,n1,n2);
       
       if(left&&right)
           return root;
       
       return (right?right:left);    //can take left or right
       
   }

int dist(Node*root,int find,int d) 
{  
   if(!root)
       return -1;
   
   if(root->data==find)
       return d;
   
   int l=dist(root->left,find,d+1);    //I was doing d+1 in return below;
   int r=dist(root->right,find,d+1);
   
   return max(l,r);        //one of distance will be -1 and other will be real 
                           //We can also write return l!=-1?l:r;
}
  
int findDist(Node* root, int a, int b) {
   // Your code here
   
   int l=0,r=0,d=0;
   Node*lca=LCA(root,a,b);
   
   int left=dist(lca,a,d);
   int right=dist(lca,b,d);
   
   return left+right;
   
}
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
