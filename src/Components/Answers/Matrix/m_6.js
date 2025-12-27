import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Maximum size rectangle</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Here , first we take row 0th and assume it as histogram and calculate max area</p>
<p>Now for row 1 to n , add previous row to current row and assume as histogram and keep calculating max area </p>
<p>During this loop , if  max_area {">"} previous max_area == save it in result.</p>
  

    <h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
  
int maxHist(int row[],int C)
{

    stack<int> result;
 
    int top_val;
 
    int max_area = 0; // Initialize max area in current row (or histogram)
 
    int area = 0; // Initialize area with current top
 
    // Run through all bars of given histogram (or row)
    
    int i = 0;
    
    while (i < C) {
        // If this bar is higher than the bar on top stack,
        // push it to stack
        if (result.empty() || row[result.top()] <= row[i])
            result.push(i++);
 
        else {
            // If this bar is lower than top of stack, then calculate area of rectangle with stack top as
            // the smallest (or minimum height) bar. 'i' is
            // 'right index' for the top and element before
            // top in stack is 'left index'
            top_val = row[result.top()];
            result.pop();
            area = top_val * i;
 
            if (!result.empty())
                area = top_val * (i - result.top() - 1);
            max_area = max(area, max_area);
        }
    }
 
    // Now pop the remaining bars from stack and calculate
    // area with every popped bar as the smallest bar
    while (!result.empty()) {
        top_val = row[result.top()];
        result.pop();
        area = top_val * i;
        if (!result.empty())
            area = top_val * (i - result.top() - 1);
 
        max_area = max(area, max_area);
    }
    return max_area;
}
  
    int maxArea(int M[MAX][MAX], int n, int m) {
        // Your code here

        //Find Max are for row 0 as histogram
        //  int result = maxHist(M[0],m);

    //Add previous row to current row 
    //Now find max area in thiss new row as histogram 
    //If area is more , replace previous result with this.
    for (int i = 1; i < n; i++)
    {
        for (int j = 0; j < m; j++)
{
  
            // if (M[i][j])
            //   { M[i][j] +=M[i - 1][j];}

        result = max(result, maxHist(M[i],n));
    }
    }
    return result;   
    
    
    }
    
    
`
}
</pre>
</div>

  </div>
        </div>
    )
}

export default a
