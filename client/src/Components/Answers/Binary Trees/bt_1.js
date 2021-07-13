
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Level order traversal</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

        <h2>Recursive:</h2>
<p>Here, we are iterating over all levels one by one and for each level,recursively iterate through all elements and print them. </p>

        <pre className="code">
            {
                `
void printLevelOrder(node* root)
{
    int h = height(root);
    int i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
}

void printCurrentLevel(node* root, int level)
{
    if (!root)
        return;
    if (level == 1)
        cout << root->data << " ";
    else if (level > 1)
    {
        printCurrentLevel(root->left, level-1);
        printCurrentLevel(root->right, level-1);
    }
}
                `
            }
        </pre>
<h2>Iterative:</h2>
<p>Here, we are using queue, and till queue is not empty , insert left and right in queue.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
  vector<int> levelOrder(Node* node)
  {

    //Your code here

    vector<int>v;

    if(!node)
      return v;

    queue<Node*>q;
    
    q.push(node);
    
    while(!q.empty())
    {
        if(q.front()->left)
            q.push(q.front()->left);

        if(q.front()->right)
            q.push(q.front()->right);

        v.push_back(q.front()->data);

        q.pop();
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
