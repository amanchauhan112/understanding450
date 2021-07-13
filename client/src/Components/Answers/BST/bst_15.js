
import React from "react";
import "../../Answers/answer.css";

const BST = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find median of BST in O(n) time and O(1) space</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>To find median in O(1) space , first find number of nodes and then find median by traversing again</p>
<p>Although , it looks like we are just traversing our tree like inorder, but main thing is that we are taking help of pointers to connect inorder successors an d traversing in sorted manner rather than taking help of data structure(such as stack)</p>
<p>For both counting number of nodes and finding median , we are using same traversal technique (i.e. Morris travesal) so that we won't use space  </p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
int countNodes(struct Node *root)
{
    struct Node *current, *pre;
 
    int count = 0;
 
    if (root == NULL)
        return count;
 
    current = root;

    while (current != NULL)
    {
        if (current->left == NULL)
        {
            count++;
            current = current->right;
        }
        else
        {
            /* Find the inorder predecessor of current */
            pre = current->left;
 
            while (pre->right != NULL && pre->right != current)
            {  
                pre = pre->right;
            }
 
            /* Connect current with its inorder predecessor */
            if(pre->right == NULL)
            {
                pre->right = current;
                current = current->left;
            }
 
            /* Remove previously created link if exists */
            else
            {
                pre->right = NULL;
                count++;
                current = current->right;
            } 
        } 
    }
 
    return count;
}
 
int findMedian(struct Node *root)
{
   if (root == NULL)
        return 0;
 
    int count = countNodes(root);
    int currCount = 0;
    struct Node *current = root, *pre, *prev;
 
    while (current != NULL)
    {
        if (current->left == NULL)
        {
            currCount++;
 
            // check if current node is the median

            // Odd case
            if (count % 2 != 0 && currCount == (count+1)/2)
                return prev->data;
 
            // Even case
            else if (count % 2 == 0 && currCount == (count/2)+1)
                return (prev->data + current->data)/2;
 
            prev = current;

            current = current->right;
        }
        else
        {
            /* Find the inorder predecessor of current */
            pre = current->left;

            while (pre->right != NULL && pre->right != current)
                pre = pre->right;
 
            /* Connect current with its inorder predecessor */
            if (pre->right == NULL)
            {
                pre->right = current;
                current = current->left;
            }
 
            /* Removing previously created link */
            else
            {
                pre->right = NULL;
 
                prev = pre;

                currCount++;
 
                // Check if the current node is the median

                if (count % 2 != 0 && currCount == (count+1)/2 )
                    return current->data;
 
                else if (count%2==0 && currCount == (count/2)+1)
                    return (prev->data+current->data)/2;
 
                prev = current;

                current = current->right;
 
            } 
        } 
    }
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default BST;
