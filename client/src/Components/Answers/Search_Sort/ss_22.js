import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find pivot element in a sorted and rotated array</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>A sorted array is rotated , that means , there will be a point where element less than previous element</p>
<pre className="code"> 
  {
    `   
      | 
     ||      here, array is rotated till 2 elements
    ||| |
    |||||
    
    `
  }
</pre>

<p>As we see here, we need to find index where previous more than curr OR curr {"<"} last of array</p>

<p>We have low , high , lowerBound (original array first element) and upperBound (original array last element) </p>

<p>We have several conditions to check :</p>
<p>If mid == lowerBound and upperBound , i.e. only 1 element so return it.</p>
<p>If mid ==lowerBound and arr[mid]{">"}=arr[mid+1] , i.e. mid is first element and mid is also pivot , return it.</p>
<p>if mid==upperBound and arr[mid]{">="}arr[mid-1] , i.e. last element is pivot </p>
<p>Finally , if curr mid value {">="} next and previous , it is pivot , return it.</p>

<p>If none of it , then change your searching array to left or right.</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`

int peakElement(int arr[], int low, int high, int lowerBound, int upperBound)
{
    int mid = low + (high - low) / 2;
     
    if (mid == lowerBound) 
    {
        if (mid == upperBound||arr[mid] >= arr[mid + 1]) 
        {
            return mid;
        }
    } 
    
    else if (mid == upperBound) 
    {
        if (arr[mid] >= arr[mid - 1]) 
        {
            return mid;
        }
    } 
    
    else 
    {
        
        if (arr[mid] >= arr[mid + 1] && arr[mid] >= arr[mid - 1]) 
        {
            return mid;
        } 
        
        else if (arr[mid] > arr[high]) 
        {
            return peakElement(arr, mid + 1, high, lowerBound, upperBound);
        } 
        
        else if (arr[mid] < arr[high]) 
        {
            return peakElement(arr, low, mid - 1, lowerBound, upperBound);
        }
    }
     
    return -1;
}
            `}
        </pre>

      </div>


    </div>
  );
};

export default ss;
