import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

 
<div className="ans_heading">

    <h1 >Multiply 2 no. represented by LL</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Simply convert list to numbers and multiply</p>
<p>Just take modulo(%1000000007) at each step</p>

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
long long  multiplyTwoLists (Node* l1, Node* l2)
{
  //Your code here
 long long int num1=0,num2=0;
  
  while(l1)
  {
      num1=num1*10+l1->data;
      num1=num1%1000000007;
      l1=l1->next;
  }
  
  while(l2)
  {
      num2=num2*10+l2->data;
      num2=num2%1000000007;
      l2=l2->next;
  }
  
  return (num1*num2)%1000000007;;
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
