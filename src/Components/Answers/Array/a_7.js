import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div className="ans_heading">

         <h1 >Write a program to cyclically rotate an array by one.</h1><br/>
         </div>
         <br></br>
         <div className="solution">
<div style={{paddingLeft:"20%"}} >

<h1>Optimal Approach :</h1>
<p>
1 Store last element in a variable say x.<br/>
2 Shift all elements one position ahead.<br/>
3 Replace first element of array with x.<br/>
</p>
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<pre className="code">
  {
    `
    int main() {
      //code
      
      int t;
      cin>>t;
      
      while(t--)
      {
          int n;
          cin>>n;
          
          int a[n];
          
          for(int i=0;i<n;i++)
          {
              cin>>a[i];
          }
          
          int temp=a[n-1];
          
          for(int i=n-1;i>0;i--)
          {
              a[i]=a[i-1];
          }
          
          a[0]=temp;
          
          for(int i=0;i<n;i++)
          {
              cout<<a[i]<<" ";
          }
          cout<<"\n";
      }
      
      return 0;
    }
    `
  }
</pre>


         </div>

         <div style={{paddingLeft:"20%"}}>

<h1>Two pointer Approach :</h1>
<p>
Swap elements one by one with last element till reach last element.
</p>
<h2>Code</h2>
<h3>
    T.C:O(n)<br/>
    S.C:O(1)
</h3>
<pre className="code">
  {
    `
    void rotate(int arr[], int n)
    {
        int i = 0, j = n-1; // i and j pointing to first and last element respectively
          while(i != j){
          swap(arr[i], arr[j]);
          i++;
        }
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
