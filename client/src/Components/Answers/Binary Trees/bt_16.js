
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Boundary Traversal of binary tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First print left nodes , then leaf nodes , then push right nodes in stack ( as we need to print in reverse order ) and then print them when leaf nodes reached.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`

void printLeaf(Node*root)
{
    if(!root)
        return;
        
    queue<Node*>q;
    q.push(root);
    
    while(!q.empty())
    {
        Node*temp=q.front();
        q.pop();
        
        if(!temp->left&&!temp->right)
            cout<<temp->data<<" ";
        
        if(root->left)
            printLeaf(root->left);
        if(root->right)   
            printLeaf(root->right);
    }
    
}
void printLeft(Node*root)
{

    while(root)
    {

    if(root->left||root->right)
        cout<<root->data<<" ";
    if(root->left)
        root=root->left;
    else
        root=root->right;
    }
}

void printRight(Node*root)
{
    stack<int>s;

    while(root)
    {
        
    if(root->left||root->right)
        s.push(root->data);
    if(root->right)
        root=root->right;
    else
        root=root->left;
    }  

    while(!s.empty())
    {
        cout<<s.top()<<" ";
        s.pop();  
    } 
}

vector <int> printBoundary(Node *root)
{
    //Your code here
     
    vector<int>v;
     
    if(!root)
        return v;
    
    cout<<root->data<<" ";

    printLeft(root->left);
    printLeaf(root);
    printRight(root->right);

    return v;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
