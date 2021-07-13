
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Largest BST in a Binary Tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>We have different approach for this question, but we are discussing one of them here:</p>
  <h2>Min-Max Approach:</h2>
  <p>Rather than going from top to bottom, traverse bottom to top .</p>
<p>For each subtree , check if BST or not, then is yes, send number of nodes and min and max of left right subtree to parent .</p>
<p>For number of nodes ,  left + right +1 for each subtree.For BST: max in left{"<"}root and min in right {">"} root. </p>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
Info largestBSTBT(Node* root)
{

    if (root == NULL)
        return {0, INT_MIN, INT_MAX, 0, true};

    if (root->left == NULL && root->right == NULL)
        return {1, root->data, root->data, 1, true};
 
    Info l = largestBSTBT(root->left);
    Info r = largestBSTBT(root->right);
 
    ret.sz = (1 + l.sz + r.sz);
 

    if (l.isBST && r.isBST && l.max < root->data && r.min > root->data)
    {
        ret.min = min(l.min, min(r.min, root->data));
        ret.max = max(r.max, max(l.max, root->data));

        ret.ans = ret.sz;
        ret.isBST = true;
 
        return ret;
    }
 
    // If whole tree is not BST, return maximum of left and right subtrees
  
    ret.ans = max(l.ans, r.ans);
    ret.isBST = false;
 
    return ret;
}
 
            `}
        </pre>

<h2>Another Approach:</h2>
<p>Here we are maintaining flags for checking if left and right subtree BST or not.</p>
<pre>
  {
`
int largestBSTUtil(Node* node, int *min_ref, int *max_ref,int *max_size_ref, bool *is_bst_ref)
{
 
    if (node == NULL)
    {
        *is_bst_ref = 1;
        return 0;
    }
     
    int min = INT_MAX;
     
    /*  max(root->left) < root->data , min(root->right) > root->data*/
    
    bool left_flag = false,right_flag = false;
     
    int ls, rs; // To store sizes of left and right subtrees
     
    /* 
        a) Get the maximum value in left subetree (Stored in *max_ref)
        b) Check whether Left Subtree is BST or not (Stored in *is_bst_ref)
        c) Get the size of maximum size BST in left subtree (updates *max_size) */
        
    *max_ref = INT_MIN;
    ls = largestBSTUtil(node->left, min_ref, max_ref,max_size_ref, is_bst_ref);
    if (*is_bst_ref == 1 && node->data > *max_ref)
        left_flag = true;
     
     
    /* Before updating *min_ref, store the min value in left subtree. 
    So that we have the correct minimum value for this subtree */
    
    min = *min_ref;
     
    /* For right subtree */
    
    *min_ref = INT_MAX;
    
    rs = largestBSTUtil(node->right, min_ref,max_ref, max_size_ref, is_bst_ref);
    if (*is_bst_ref == 1 && node->data < *min_ref)
        right_flag = true;
     
    // Update min and max values for the parent recursive calls
 
    if (min < *min_ref)
        *min_ref = min;
        
    if (node->data < *min_ref) // For leaf nodes
        *min_ref = node->data;
        
    if (node->data > *max_ref)
        *max_ref = node->data;
     
    /* If both left and right subtrees are BST.*/
    
    if(left_flag && right_flag)
    {
        if (ls + rs + 1 > *max_size_ref)
            *max_size_ref = ls + rs + 1;
        return ls + rs + 1;
    }
    else
    {
        *is_bst_ref = 0;
        return 0;
    }
}

int largestBst(Node* node)
{

    int min = INT_MAX; // For minimum value in right subtree
    int max = INT_MIN; // For maximum value in left subtree
     
    int max_size = 0; // For size of the largest BST
    bool is_bst = 0;
     
    largestBSTUtil(node, &min, &max,&max_size, &is_bst);
     
    return max_size;
}

`
  }
</pre>
      </div>


    </div>
  );
};

export default BST;
