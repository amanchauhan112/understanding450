import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Weighted Job Scheduling in O(n Log n) time</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>

   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

bool myfunction(Job s1, Job s2)
{
    return (s1.finish < s2.finish);
}

// A Binary Search based function to find the latest job
// (before current job) that doesn't conflict with current

// returns -1 if all jobs before index conflict with it.

int binarySearch(Job jobs[], int index)
{
  
    int lo = 0, hi = index - 1;
  
    while (lo <= hi)
    {
        int mid = (lo + hi) / 2;
        if (jobs[mid].finish <= jobs[index].start)
        {
            if (jobs[mid + 1].finish <= jobs[index].start)
                lo = mid + 1;
            else
                return mid;
        }
        else
            hi = mid - 1;
    }
  
    return -1;
}
  
int findMaxProfit(Job arr[], int n)
{
    // Sort jobs according to finish time
    sort(arr, arr+n, myfunction);
  
    // stores the profit for jobs till arr[i] (including arr[i])
    int *table = new int[n];
    table[0] = arr[0].profit;

    for (int i=1; i<n; i++)
    {
        // Find profit including the current job
        int inclProf = arr[i].profit;
        int l = binarySearch(arr, i);
        if (l != -1)
            inclProf += table[l];
  
        // Store maximum of including and excluding
        table[i] = max(inclProf, table[i-1]);
    }
  
    int result = table[n-1];
    delete[] table;
  
    return result;
}

            `}
        </pre>

Check <a href="https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/">here</a>

      </div>


    </div>
  );
};

export default ss;
