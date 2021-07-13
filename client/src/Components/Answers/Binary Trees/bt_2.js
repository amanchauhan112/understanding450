
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Reverse Level Order traversal</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

   <h2>Code</h2>
<h2>Recursive</h2>

<p>We are traversing levels from last to first and printing elements</p>
<pre className="code">
  {
    `
void reverseLevelOrder(node* root)
{
    int h = height(root);
    int i;
    for (i=h; i>=1; i--) //THE ONLY LINE DIFFERENT FROM NORMAL LEVEL ORDER
        printGivenLevel(root, i);
}
 
void printGivenLevel(node* root, int level)
{
    if (root == NULL)
        return;
    if (level == 1)
        cout << root->data << " ";
    else if (level > 1)
    {
        printGivenLevel(root->left, level - 1);
        printGivenLevel(root->right, level - 1);
    }
}
    `
  }
</pre>

<h2>Iterative:</h2>
<p>For each level, insert elements from queue to stack and then print it.</p>
        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
void reverse(Node*root)
{
          //Your code here
      if(!root)
        return;
        
      queue<Node*>q;
      q.push(root);
      stack<int>s;
       
      while(!q.empty())
      {
          Node*curr=q.front();
          q.pop();
          s.push(curr->data);

          if(curr->right)
            q.push(curr->right);
          if(curr->left)
            q.push(curr->left);  
      }
      
      while(!s.empty())
      {
          cout<<s.top()<<" ";
          s.pop();
      }
}
vector<int> reverseLevelOrder(Node *root)
{

vector<int>v;
reverse(root);
return v;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
