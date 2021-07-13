
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Kth Smallest element</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>Traverse inorder manner and print kth element</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(h)
        </h3>

        <pre className="code">
          {`
Node* kthSmallest(Node* root, int& k)
{
    if (root == NULL)
        return NULL;
 
    Node* left = kthSmallest(root->left, k);
 
    if (left != NULL)     return left;
    k--;
    if (k == 0)    return root;
 
    return kthSmallest(root->right, k);
}
            `}
        </pre>

        {/* <h2>O(1) Space solution:Morris Traversal</h2>
<p>We are storing our answer in ksmall variable and using curr for current element</p>
<p>Traverse while curr not NULL:</p>
<p>IF no left child of current : increment counter and move to right.</p>
<p>IF left child exist for current : first create links for inorder successor. </p>
<p>For both steps , if counter==k , make ksmall = data of current.</p>
<pre className="code">
  {
    `
int KSmallestUsingMorris(Node *root, int k)
{

    int count = 0;
 
    int ksmall = INT_MIN;
    Node *curr = root;
 
    while (curr != NULL)
    {
        //Morris traversal : if current does not have left child
        // rather than printing as we did in inorder, we will just
        // increment the count as the number will be in an increasing order
        if (curr->left == NULL)
        {
            count++;
 
            if (count==k)
                ksmall = curr->key;
 

            curr = curr->right;
        }
        else
        {
            // we create links to Inorder Successor and count using these links
           
            Node *pre = curr->left;
            while (pre->right != NULL && pre->right != curr)
                pre = pre->right;
 
            // building links
            if (pre->right==NULL)
            {
                //link made to Inorder Successor
                pre->right = curr;
                curr = curr->left;
            }
 
            // While breaking the links in so made temporary threaded tree 
            //we will check for the K smallest condition
            else
            {

                pre->right = NULL;
 
                count++;

                if (count==k)
                    ksmall = curr->key;
 
                curr = curr->right;
            }
        }
    }
    return ksmall;
}
    `
  }
</pre> */}
      </div>


    </div>
  );
};

export default BST;
