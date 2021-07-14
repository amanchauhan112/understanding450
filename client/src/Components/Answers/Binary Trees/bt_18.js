
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1></h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>First, push all elements in a queue in inorder manner</p>
<p>while q.size()--:</p>
<p>Use pointers to make connection like DLL:</p>
<p>Connect queue front to right of head</p>
<p>Place prev oh head,Move head to right,Connect left of head to prev and then prev on head.</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
void inorder(Node*root,queue<Node*>&q)
{
    if(!root)
        return;
    
    inorder(root->left,q);
    q.push(root);
    inorder(root->right,q);

}


Node * bToDLL(Node *root)
{
    // your code here
    
    queue<Node*>q;
    
    Node*head = newNode(0);

    Node*begin=head;

    inorder(root,q);

    int size=q.size();
    
    while(size--)
    {
        Node*temp=newNode(q.front()->data);
        head->right=temp;
        Node*prev=head;
        head=head->right;
        head->left=prev;
        prev=head;
        q.pop();
    }

    head->right=NULL;
    begin->right->left=NULL;
  
    return begin->right;

}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BT;
