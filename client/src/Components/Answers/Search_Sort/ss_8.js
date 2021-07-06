import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find Majority Element</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Sort the array and count frequency of element by checking curr==prev</p>

<p>* We can also use map , that will take O(n) time and O(n) space </p>
  
  <p>Check method 3 in link at bottom of page for T.C: O(n) and S.C: O(1) soltion</p>
   <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
int majorityElement(int *arr, int n)
{
    sort(arr, arr+n);
  
    int count = 1, max_ele = -1, temp = arr[0], ele, f=0;
    
    for(int i=1;i<n;i++)
    {
     if(temp==arr[i])
        {
            count++;
        }
        else
        {
            count = 1;
            temp = arr[i];
        }
   if(max_ele<count)
        {
            max_ele = count;
            ele = arr[i];
            
            if(max_ele>(n/2))
            {
                f = 1;
                break;
            }
        }
    }
   return (f==1 ? ele : -1);
}

            `}
        </pre>
<p>Many more solutions as given <a href="https://www.geeksforgeeks.org/majority-element/">here</a></p>
      </div>


    </div>
  );
};

export default ss;
