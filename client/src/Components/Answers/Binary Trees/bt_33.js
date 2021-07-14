
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Kth ancestor of a node in binary tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
   Node* temp = NULL;
 
   // recursive function to calculate Kth ancestor
   Node* kthAncestorDFS(Node *root, int node , int &k)
   {  
       // Base case
       if (!root)
           return NULL;
        
       if (root->data == node||
          (temp =  kthAncestorDFS(root->left,node,k)) ||
          (temp =  kthAncestorDFS(root->right,node,k)))
       {  
           if (k > 0)       
               k--;
            
           else if (k == 0)
           {
               cout<<"Kth ancestor is: "<<root->data;
                
               // return NULL to stop further backtracking
               return NULL;
           }
            
           // return current node to previous call
           return root;
       }
   }
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
