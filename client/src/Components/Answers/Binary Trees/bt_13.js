
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>ZigZag Tree Traversal</h1>
     </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>For EVEN Level:<a href="/bt_1">Level order Traversal</a></p>
        <p>For ODD Level:<a href="bt_2">Reverse Level order Traversal</a></p>
     
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
vector <int> zigZagTraversal(Node* root)
{
	// Code here
    
    vector<int>ans;
    
    if(!root)
        return ans; 
        
    deque<Node*>q;

    int size;
    q.push_back(root);
    bool x=true;
    while(!q.empty())
    {
        size=q.size();
        for(int i=0;i<size;i++)
        {
            if(x)
            {
              Node*temp=q.back();
              q.pop_back();
              ans.push_back(temp->data);
              if(temp->left)
                q.push_front(temp->left);
              if(temp->right)
                q.push_front(temp->right);         
            }
            else
            {
              Node*temp=q.front();
              q.pop_front();
              ans.push_back(temp->data);
              if(temp->right)
                q.push_back(temp->right);    
              if(temp->left)
                q.push_back(temp->left);
 
            }
        }
        x=!x;
    }
    return ans;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
