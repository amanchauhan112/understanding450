import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div className="ans_heading">

         <h1 >Move all negative numbers to beginning and positive to end with constant extra space</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<h2>Two pointer approach:</h2>
<p>
Check If the left and right pointer elements are negative then simply increment the left pointer.
Otherwise, if the left element is positive and the right element is negative then simply swap the elements, and simultaneously increment and decrement the left and right pointers.
Else if the left element is positive and the right element is also positive then simply decrement the right pointer.
Repeat the above 3 steps until the left pointer ≤ right pointer.
</p>
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<h2>Iterative:</h2>
<pre className="code">
  {
    `
    void shiftall(int arr[], int left,
      int right)
{

// Loop to iterate over the
// array from left to the right
while (left<=right)
{
// Condition to check if the left
// and the right elements are
// negative
if (arr[left] < 0 && arr[right] < 0)
left+=1;

// Condition to check if the left
// pointer element is positive and
// the right pointer element is negative
else if (arr[left]>0 && arr[right]<0)
{
int temp=arr[left];
arr[left]=arr[right];
arr[right]=temp;
left+=1;
right-=1;
}

// Condition to check if both the
// elements are positive
else if (arr[left]>0 && arr[right] >0)
right-=1;
else{
left += 1;
right -= 1;
}
}
}

// Function to print the array
void display(int arr[], int right){

// Loop to iterate over the element
// of the given array
for (int i=0;i<=right;++i){
cout<<arr[i]<<" ";
}
cout<<endl;
}
    `
  }
</pre>


         </div>
</div>
 
       </div>
    )
}
}

export default one;
