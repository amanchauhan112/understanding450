import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Check if all levels of two trees are anagrams or not</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Here we will do level order traversal and in ech lvl check anagram or not</p>
<p>To check anagram , store elements of lvl in array or vector , sort it and check if equal or not</p>

<h2>Level order traversal :</h2>
<p>We are doing lvl order traversal by first storing root of both trees in separate queue</p>
<p>We will keep checking if size of both queue same or not , because only same length can be anagrams</p>
<p>Now , length is same , so till length greater than 0:</p>        
        <p>pop both nodes from queue and if there right or left child , push them in queue</p>
<p>keep decrementing initial size , and when it becomes 0 (i.e. level completed) : sort elements and check if same or not.</p>

        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(n)
        </h3>

        <pre className="code">
          {`
   
   bool areAnagrams(Node *root1, Node *root2)
   {
       if (!root1 && !root2)
           return true;
       if (!root1 || !root2)
           return false;

       queue<Node *> q1, q2;
       q1.push(root1);
       q2.push(root2);
     
       while (1)
       {
           int n1 = q1.size(), n2 = q2.size();
     
           if (n1 != n2)
               return false;
           if (n1 == 0)
               break;
    
           vector<int> curr_level1, curr_level2;
          
           while (n1 > 0)
           {
               Node *node1 = q1.front();
               q1.pop();

               if (node1->left != NULL)
                   q1.push(node1->left);
               if (node1->right != NULL)
                   q1.push(node1->right);

               n1--;
     
               Node *node2 = q2.front();
               q2.pop();

               if (node2->left)
                   q2.push(node2->left);
               if (node2->right)
                   q2.push(node2->right);
     
               curr_level1.push_back(node1->data);
               curr_level2.push_back(node2->data);
           }

           sort(curr_level1.begin(), curr_level1.end());
           sort(curr_level2.begin(), curr_level2.end());
    
           if (curr_level1 != curr_level2)
               return false;
       }
     
       return true;
   }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
