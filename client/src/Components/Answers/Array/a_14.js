import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Reverse a Linked List</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>First sort and add begginning interval</p>
<p>if end{">"}beg of nxt interval ={">"} add max(end,beg)</p>
<p>else : add nxt interval </p>
<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
vector<vector<int>> merge(vector<vector<int>>& intervals) {
        
        if(intervals.size()<=1) return intervals;
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> output;
        output.push_back(intervals[0]);
        for(int i=1; i<intervals.size(); i++) {
            if(output.back()[1] >= intervals[i][0]) output.back()[1] = max(output.back()[1] , intervals[i][1]);
            else output.push_back(intervals[i]); 
        }
        return output;
    
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
