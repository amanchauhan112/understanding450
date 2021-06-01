import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';
const one = () => {

    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>
        <div className="ans_heading">
         <h1 >Reverse the Array</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'20px',justifyContent:'center'}}>
         <h1 >Given an array (or string), the task is to reverse the array/string.</h1>
         
         <br/>


<p>

Input  : arr[] = 1, 2, 3 <br/>
Output : arr[] = 3, 2, 1 <br/>
<br/>
Input :  arr[] = 4, 5, 1, 2 <br/>
Output : arr[] = 2, 1, 5, 4 <br/>
</p>

<h1>Iterative way :</h1>
1 Initialize start and end indexes as start = 0, end = n-1 <br/>
2 In a loop, swap arr[start] with arr[end] and change start and end as follows : <br/>
start = start +1, end = end – 1
<br/>
<img alt="jkl"src="https://media.geeksforgeeks.org/wp-content/uploads/arra34.jpg"/>
<br/>

Another example to reverse a string:
      <br/>
      <img alt="ghj" src="https://media.geeksforgeeks.org/wp-content/uploads/ARAIRA.jpg"/>
      Below is the implementation of the above approach : 
       <p>


           
       </p>
       {/* <Comment/> */}

      
      
         </div>
 
       </div>
    )
}

export default one
