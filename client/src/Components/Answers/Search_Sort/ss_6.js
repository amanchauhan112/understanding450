import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Optimum location of point to minimize total distance</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Here we will use Binary Search to find point</p>
<p>Make loh and high as -1e6 and 1e6 respectively.</p>
<p>Now, as mentioned <a href="https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/">here</a> </p>
<pre className="code">
  {
    `
    *-------------------------------*

    First Find two mid values at one third locations
    
  low                                high
    *----------+----------+-----------*
    <--dist1-->            <--dist2-->
    
    If dist1 smaller,high mid2 else low mid1

    Let's say dist 1 is smaller

    low                  high
    *----------+----------+-----------*


    Now we will do similarly as step 2 till low and high difference
    becomes 1e-6 i.e. minimum value for int.

    
    `
  }
</pre>

   <h2>Code</h2>

        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3> */}

        <pre className="code">
          {`

// loop until difference between low and high
// become less than less than 1e-6
    
while ((high - low) > 1e-6) {
        // mid1 and mid2 are representative x co-ordiantes
        // of search space
        double mid1 = low + (high - low) / 3;
        double mid2 = high - (high - low) / 3;

        double dist1 = compute(p, n, l, mid1);
        double dist2 = compute(p, n, l, mid2);
 
        // if mid2 point gives more total distance,
        // skip third part
        if (dist1 < dist2)
            high = mid2;
 
        // if mid1 point gives more total distance,
        // skip first part
        else
            low = mid1;
    }
while ((high - low) > EPS) {
    // mid1 and mid2 are representative x co-ordiantes
    // of search space
    double mid1 = low + (high - low) / 3;
    double mid2 = high - (high - low) / 3;

    //
    double dist1 = compute(p, n, l, mid1);
    double dist2 = compute(p, n, l, mid2);

    // if mid2 point gives more total distance,
    // skip third part
    if (dist1 < dist2)
        high = mid2;

    // if mid1 point gives more total distance,
    // skip first part
    else
        low = mid1;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
