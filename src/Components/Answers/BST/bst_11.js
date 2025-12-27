
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Merge Two Balanced Binary Search Trees</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
   <p>APPROACH 1: Insert elements from second tree to first.</p>
   <p>APPROACH 2: Take elements of both tree in arrays and merge both arrays.</p>
   <p>Construct tree from this array.</p>
   
   <p>For this:we use storeInorder function to store BST elements,then merge to combine both arrays and then sortedArrayToBST function to construct BST.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
int *merge(int arr1[], int arr2[], int m, int n)
{

    int *mergedArr = new int[m + n];
    int i = 0, j = 0, k = 0;

    while (i < m && j < n)
    {
        if (arr1[i] < arr2[j])
        {
            mergedArr[k] = arr1[i];
            i++;
        }
        else
        {
            mergedArr[k] = arr2[j];
            j++;
        }
        k++;
    }
 
    // If there are more elements :

    while (i < m)
    {
        mergedArr[k] = arr1[i];
        i++; k++;
    }
 
    while (j < n)
    {
        mergedArr[k] = arr2[j];
        j++; k++;
    }
 
    return mergedArr;
}
 

void storeInorder(node* node, int inorder[], int *index_ptr)
{
    if (node == NULL)
        return;
 

    storeInorder(node->left, inorder, index_ptr);
 
    inorder[*index_ptr] = node->data;
    (*index_ptr)++;

    storeInorder(node->right, inorder, index_ptr);
}
 
node* sortedArrayToBST(int arr[], int start, int end)
{

    if (start > end)
      return NULL;
 
    int mid = (start + end)/2;
    node *root = newNode(arr[mid]);
 
    root->left = sortedArrayToBST(arr, start, mid-1);
    root->right = sortedArrayToBST(arr, mid+1, end);
    return root;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
