import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Circular tour</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>Here , we need to keep track of amount of petrol that is deficient and current capacity</p>
<p>First , we will keep track of capacity (i.e. remaining petrol after covering distance) i.e. capacity+(petrol-distance) for all positions </p>
<p>When capacity becomes negative , that means we will store this as deficiency as this may be because of our starting position</p>
<p>So, change start position to next of previous start and change capacity to 0(as we saved it in deficient)</p>  
        <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
  int tour(petrolPump p[],int n)
  {
  
   int start=0,deficit=0;
   int capacity=0;
   
   for(int i=0;i<n;i++)
   {
       capacity+=p[i].petrol-p[i].distance;
       if(capacity<0)
       {
           start=i+1;
           deficit+=capacity;
           capacity=0;
       }
   }
   return(capacity+deficit>0)?start:-1;
   
  }
    
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
