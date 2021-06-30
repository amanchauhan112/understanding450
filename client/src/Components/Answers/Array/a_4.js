import React from 'react'
// import Comment from '../../Comment/Comment';
import '../../Answers/answer.css';

class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',overflow:'auto'}}>

         
        {/* <div className="ans_heading"> */}
     <div style={{border:'2px solid black',backgroundColor:"white",marginTop:'20px',display:'flex',justifyContent:'center',borderRadius:'50px 50px 50px 50px'}}>

         <h1 >Sort an array of 0s, 1s and 2s</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',padding:'0px',display:'flex',justifyContent:'center'}}>
<div>

<h1>Optimal Approach :</h1>
<p>
  We are simply counting and making array:
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

    void sort012(int a[], int n)
    {
           
        int c0=0,c1=0,c2=0;
        
        for(int i=0;i<n;i++)
        {
            if(a[i]==0)
            {
                c0++;
            }
            else if(a[i]==1)
            {
                c1++;
            }
            else
            {
                c2++;
            }
        }
   
        int i=0;
            while(c0--)
            {
                a[i++]=0;
            }
            while(c1--)
            {
                a[i++]=1;
            }
            while(c2--)
            {
                a[i++]=2;
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
