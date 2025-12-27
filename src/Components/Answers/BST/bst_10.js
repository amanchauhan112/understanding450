
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Convert a normal BST to Balanced BST</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We will store elements in vector and create our BST.</p>
<p>First do in order traversal of bst and store in vector.</p>
<p>Then, first make mid as root as it will be best element to balance bst, and then recursively add its left and right node(start to mid and mid+1 to end).</p>


   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
void storeBSTNodes(Node* root, vector<Node*> &nodes)
{

    if (root==NULL)
        return;

    storeBSTNodes(root->left, nodes);
    nodes.push_back(root);
    storeBSTNodes(root->right, nodes);
}
 

Node* buildTreeUtil(vector<Node*> &nodes, int start,int end)
{

    if (start > end)
        return NULL;
 
    int mid = (start + end)/2;
    Node *root = nodes[mid];

    root->left  = buildTreeUtil(nodes, start, mid-1);
    root->right = buildTreeUtil(nodes, mid+1, end);
 
    return root;
}
 

Node* buildTree(Node* root)
{

    vector<Node *> nodes;
    storeBSTNodes(root, nodes);
 
    int n = nodes.size();
    return buildTreeUtil(nodes, 0, n-1);
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
