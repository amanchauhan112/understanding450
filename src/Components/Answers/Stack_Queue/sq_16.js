import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Merge Overlapping Intervals</h1>
      </div>

<br/>
      <div className="solution">
      <h1>Optimal Approach :</h1>
<p>First we sort intervals according to first of each interval</p>
<p>Then first we insert 0th interval , after that :</p>        
<p>First check intervals overlap(i.e. second of ith interval greater than first of (i+1)th interval)</p>
<p>If not : push it, if yes:make second of ith as max(second of ith,second of (i+1)th)</p>

        <h2>Code</h2>

        <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
     vector<vector<int>> merge(vector<vector<int>>& intervals) {

          if(intervals.size()<=1) 
            return intervals;
          
          sort(intervals.begin(), intervals.end());
          
          vector<vector<int>> output;
          output.push_back(intervals[0]);
          
          for(int i=1; i<intervals.size(); i++) {
              if(output.back()[1] >= intervals[i][0]) 
                output.back()[1] = max(output.back()[1] , intervals[i][1]);
              else 
                output.push_back(intervals[i]); 
          }
          return output;
      
      }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
