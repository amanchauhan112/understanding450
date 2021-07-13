import React from 'react';
import './style.css';

const BST = () => {
  return (
    <div className="questions_page" style={{backgroundColor:"greenyellow"}}>
     <div className="page_heading" >
      <h1 style={{color:"rgb(163, 82, 96)"}} >Binary Trees</h1>
      </div>

<br/>
<h1><a href="https://practice.geeksforgeeks.org/problems/level-order-traversal/1" className="bt_questions">1.Level order traversal</a></h1>
<a href="/bt_1" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1" className="bt_questions">2.Reverse Level Order traversal</a></h1>
<a href="/bt_2" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1" className="bt_questions">3.Height of a tree</a></h1>
<a href="/bt_3" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1" className="bt_questions">4.Diameter of a tree</a></h1>
<a href="/bt_4" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/" className="bt_questions">5.Mirror of a tree</a></h1>
<a href="/bt_5" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/" className="bt_questions">6.Inorder Traversal of a tree both using recursion and Iteration</a></h1>
<a href="/bt_6" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/" className="bt_questions">7.Preorder Traversal of a tree both using recursion and Iteration</a></h1>
<a href="/bt_7" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/" className="bt_questions">8.Postorder Traversal of a tree both using recursion and Iteration</a></h1>
<a href="/bt_8" className="answer_link"> &emsp;&emsp; Link to answer</a>

{/* <h1><a href="" className="bt_questions">9.Left View of a tree</a></h1>
<a href="/bt_9" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">10.Right View of Tree</a></h1>
<a href="/bt_10" className="answer_link"> &emsp;&emsp; Link to answer</a> */}

{/* <h1><a href="" className="bt_questions">11.Top View of a tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">12.Bottom View of a tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">13.Zig-Zag traversal of a binary tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">14.Check if a tree is balanced or not</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">15.Diagnol Traversal of a Binary tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">16.Boundary traversal of a Binary tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">17.Construct Binary Tree from String with Bracket Representation</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">18.Convert Binary tree into Doubly Linked List</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">19.Convert Binary tree into Sum tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">20.Construct Binary tree from Inorder and preorder traversal</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">21.Find minimum swaps required to convert a Binary tree into BST</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">22.Check if Binary tree is Sum tree or not</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">23.Check if all leaf nodes are at same level or not</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">24.Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">25.Check if 2 trees are mirror or not</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">26.Sum of Nodes on the Longest path from root to leaf node </a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">27.Check if given graph is tree or not.  [ IMP ]</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">28.Find Largest subtree sum in a tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">29.Maximum Sum of nodes in Binary tree such that no two are adjacent </a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">30.Print all "K" Sum paths in a Binary tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">31.Find LCA in a Binary tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">31.Find LCA in a Binary tree
32.Find distance between 2 nodes in a Binary tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">33.Kth Ancestor of node in a Binary tree</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">34.Find all Duplicate subtrees in a Binary tree [ IMP ]</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>

<h1><a href="" className="bt_questions">35.Tree Isomorphism Problem</a></h1>
<a href="/bt_" className="answer_link"> &emsp;&emsp; Link to answer</a>
 */}

      </div>
  );
};

export default BST;