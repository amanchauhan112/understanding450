
import React from "react";
import "../../Answers/answer.css";

const BT = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Minimum swap required to convert binary tree to binary search tree</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

  <p>First store inorder traversal in a vector</p>
 <p>Take another vector of pairs and insert element and their index pairwise</p>
<p>Now , sort vector of pairs</p>
<p>For each elements in pair vector:</p>
<p>If current index  == t[i].second : continue</p>
<p>else : swap first and second with t[t[i].second] first and second(i.e. values in index of original array)</p>   
   <p>Keep incrementing ans variable and decrement iterator if index still not same</p>
   
   
   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

//Initially:
// v is empty vector 
// n is size of array 
// index is 0

void inorder(int a[], std::vector<int> &v,int n, int index)
{
  if(index >= n)
      return;
  
  inorder(a, v, n, 2 * index + 1);
  v.push_back(a[index]);
  inorder(a, v, n, 2 * index + 2);
}

int minSwaps(std::vector<int> &v)
{
  std::vector<pair<int,int>> t(v.size());
  int ans = 0;

  for(int i = 0; i < v.size(); i++)
    {  
      t[i].first = v[i];
      t[i].second = i;
    }

  sort(t.begin(), t.end());

  for(int i = 0; i < t.size(); i++)
  {
    if(i == t[i].second)
        continue;
    else
        {
    // swaping of elements
    swap(t[i].first, t[t[i].second].first);
    swap(t[i].second, t[t[i].second].second);
        }

    // Second is not equal to i
    if(i != t[i].second)
        --i;
    ans++;
  }
  return ans;
}
            `}
        </pre>
        
  </div>


    </div>
  );
};

export default BT;
