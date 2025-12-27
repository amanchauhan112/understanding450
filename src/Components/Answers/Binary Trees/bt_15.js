
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Diagonal Traversal of Binary Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>If left chil:push it in vector,else:print and move right</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
vector <vector <int>> result;

void diagonalPrint(Node* root)
{
    if(root == NULL)
        return;
 
    queue <Node*> q;
    q.push(root);
 
    while(!q.empty())
    {
        int size = q.size();
        vector <int> answer;
 
        while(size--)
        {
            Node* temp = q.front();
            q.pop();
 
            // traversing each component;
            while(temp)
            {
                answer.push_back(temp->data);
 
                if(temp->left)
                    q.push(temp->left);
 
                temp = temp->right;
            }
        }
        result.push_back(answer);
    }
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
