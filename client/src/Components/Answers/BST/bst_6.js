
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Populate Inorder Successor for all nodes</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>It's a simple problem , just a single step to think</p>
<p>We need to point to inorder successor , so just traverse in inorder manner(For eg. using p pointer) and make a pre pointer for connection </p>
<p>While traversing, point next pointer of pre to p and place our pre pointer to p. </p>
<p>This will connect our tree in inorder manner.</p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
node*pre=NULL;
void populateNext(struct node* p)
{

// Your code goes here
    if(!p)
      return;
    
    populateNext(p->left);
    
    if(pre)
        pre->next=p;
    pre=p;
    
    populateNext(p->right);
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
