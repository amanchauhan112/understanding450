
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Leaf at same level </h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Count depth for each node's left and right child.</p>
  
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
    int depth(Node*root,bool&ans)
    {
        if(!root)
            return 0;
        if(!root->right&&!root->left)
            return 1;
            
        int left=depth(root->left,ans);
        int right=depth(root->right,ans);
        
        if(left&&right&&left!=right)
            ans=false;
            
        return (max(right,left)+1);    
    }
    
    bool check(Node *root)
    {
        //Your code here
        
        bool ans=true;
        
        depth(root,ans);
        
        return ans;
    }
            `}
        </pre>
      <h2>Another Approach:</h2>
      <p>Do level order traversal and save level of first leaf node, check for all leaf node if level is same or not.</p>
<pre className="code">
  {
`
int checkLevelLeafNode(Node* root)
{
    if (!root)
        return 1;
  
    queue<Node*> q;
    q.push(root);
  
    int result = INT_MAX;
    int level = 0;

    while (!q.empty()) 
    {
        int size = q.size();
        level += 1;
 
        // traverse for complete level

        while(size > 0){

            Node* temp = q.front();
            q.pop();

            if (temp->left) {
                q.push(temp->left);

                if(!temp->left->right && !temp->left->left){
 
                    // if it's first leaf node
                    if (result == INT_MAX)
                        result = level;
          
                    else if (result != level)
                        return 0;                   
                }
            }
              
             // check for right child
            if (temp->right){
                q.push(temp->right);
 
                // if it's leaf node
                if (!temp->right->left && !temp->right->right)
 
                    // if it's first leaf node till now,
                    // then update the result
                    if (result == INT_MAX)
                        result = level;
                     
                    // if it is not the first leaf node,
                    // then compare the level with level
                    // of previous leaf node
                    else if(result != level)
                        return 0;
                     
               }
               size -= 1;
        }   
    }
     
    return 1;
}
`
  }
</pre>


  </div>


    </div>
  );
};

export default BT;
