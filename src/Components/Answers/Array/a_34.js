import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Palindromic array</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>Check if each element is palindrome or not</p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int PalinArray(int a[], int n)
{  //add code here.

    int flag = 1;
for(int j = 0; j < n; j++)
{
int temp = a[j];
int rem, sum = 0;
while(temp > 0)
{
rem = temp % 10;
sum = sum * 10 + rem;
temp /= 10;
}
if(a[j] != sum)
{
flag = 0;
break;
}
else
    flag = 1;

}
return flag;

}
`
}
</pre>


    </div>
</div>

  </div>
        </div>
    )
}

export default a
