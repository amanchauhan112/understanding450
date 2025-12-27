import React from "react";
import "../../Answers/answer.css";

const ss = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Find the repeating and the missing</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>To do this in o1 space , we can take each value as index , subtract 1 and make it negative </p>
<p>Foe eg. make arr[abs(arr[i])-1] negative (abs will make negative number as positive) </p>
  <p>If any value is not negative , i.e. its repeating value</p>
  <p>Traverse array again , missing element will be i+1 , where i is index of positive element</p>
   <h2>Code</h2>

        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
          {`
void printTwoElements(int arr[], int size)
{
    int i;
    cout << " The repeating element is ";

    for (i = 0; i < size; i++) {
        if (arr[abs(arr[i]) - 1] > 0)
            arr[abs(arr[i]) - 1] = -arr[abs(arr[i]) - 1];
        else
            cout << abs(arr[i]);
    }

    cout << "and the missing element is ";
    for (i = 0; i < size; i++) {
        if (arr[i] > 0)
            cout << (i + 1);
    }
}

            `}
        </pre>
There are many more Approach to this question as given <a href="https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/">here</a>
      </div>


    </div>
  );
};

export default ss;
