import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Count Inversions</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>The basic rule we are following here is:</p>
<p>We are first separating each element</p>
<p>while merging them , we will check if left ele greater than right</p>
<p>If yes we will count that as an inversion.</p>


<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
long long int merge(long long arr[], int temp[], int left,int mid, int right) 
{ 
    int i, j, k; 
    long long inv_count = 0; 
  
    i = left;
    j = mid; 
    k = left; 
    while ((i <= mid - 1) && (j <= right)) { 
        if (arr[i] <= arr[j]) { 
            temp[k++] = arr[i++]; 
        } 
        else { 
            temp[k++] = arr[j++]; 
            inv_count = inv_count + (mid - i); 
        } 
    } 

    while (i <= mid - 1) 
        temp[k++] = arr[i++]; 

    while (j <= right) 
        temp[k++] = arr[j++]; 

    for (i = left; i <= right; i++) 
        arr[i] = temp[i]; 
  
    return inv_count; 
} 

long long int _mergeSort(long long arr[], int temp[],  
                 int left, int right) 
{ 
    long long mid, inv_count = 0; 
    if (right > left) { 

        mid = (right + left) / 2; 
  
        /* Inversion count will be sum of  
        inversions in left-part, right-part  
        and number of inversions in merging */
        
        inv_count += _mergeSort(arr, temp,  
                                left, mid); 
        inv_count += _mergeSort(arr, temp,  
                             mid + 1, right); 
  
        /*Merge the two parts*/
        inv_count += merge(arr, temp, left,  
                           mid + 1, right); 
    } 
    return inv_count; 
} 

long long int inversionCount(long long arr[], long long N)
{
    int temp[N]; 
    return _mergeSort(arr, temp, 0, N- 1); 
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
