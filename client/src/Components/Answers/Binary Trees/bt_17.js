
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Construct Binary Tree from String with bracket representation</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Make first element as root, then , for next opening bracket, find it;s closing bracket</p>
 <p>If ind is index of that closing bracket, till ind-1 will be left child and ind+2 to end index will be right child.</p>  
   <pre>
     {
       `
       4(2(3)(1))(6(5))
       
       bracket before 2 is first opening bracket,so find its closing bracket 

       Second bracket after 1 is its closing bracket, so 2 3 1 will be in left child

       Similarly, 6 5 will be in right child
       `
     }
   </pre>
   <h2>Code</h2>

        <h3>
          T.C:O(n^2)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
//si and ei are starting and ending index

int findIndex(string str, int si, int ei)
{
    if (si > ei)
        return -1;
 
    stack<char> s;
 
    for (int i = si; i <= ei; i++) 
    {
 
        if (str[i] == '(')
            s.push(str[i]);
 
        else if (str[i] == ')')
        {
            if (s.top() == '(') 
            {
                s.pop();
 
                // if stack is empty, this is the required index

                if (s.empty())
                    return i;
            }
        }
    }

    return -1;
}
 
Node* treeFromString(string str, int si, int ei)
{

    if (si > ei)
        return NULL;

    Node* root = newNode(str[si] - '0');

    int index = -1;
 
    // if next char is '(' find the index of its complement ')'

    if (si + 1 <= ei && str[si + 1] == '(')
        index = findIndex(str, si + 1, ei);
 
    // if index found
    if (index != -1) 
    {
        root->left  = treeFromString(str, si + 2, index - 1);

        root->right = treeFromString(str, index + 2, ei - 1);
    }
    return root;
}
            `}
        </pre>
      </div>


    </div>
  );
};

export default BT;
