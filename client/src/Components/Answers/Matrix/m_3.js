import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Find median in a row wise sorted matrix</h1><br/>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>
<p>Median will be the number that has half number less than itself in matrix</p>
<p>First we will find smallest and largest number of matrix as a and b</p>
<p>Take mid of a and b ((a+b)/2) , count numbers less than mid </p>
<p>If count less than k : make a as mid +1 ,else : b as mid </p>

    <h2>Code</h2>
<h3>
T.C:O(32 * R * log(C))<br/>
S.C:O(1)
</h3>
<pre className="code">
    {
`
int median(vector<vector<int>> &matrix, int r, int c){

int M=r,N=c;
int k = ( M*N + 1 )/2 ;

int a = INT_MAX ;
int b = INT_MIN ;

for( int i = 0 ; i < M ; i++ )
{
a = min( a , matrix[i][0] ) ;
b = max( b , matrix[i][N-1] ) ;
}

while( a < b )
{
int m = ( a + b )/2 ;

int cnt = 0 ;

for( int i = 0 ; i < M ; i++ )

//When all numbers are less , upper bound function gives n+1 
//If all greater , it gives 0
//Else it gives index of upper bound of numbers

cnt = cnt + ( upper_bound( matrix[i].begin() , matrix[i].end() , m ) - matrix[i].begin() ) ;

if( cnt < k )a = m + 1 ;
else b = m ;
}

return a ;
`
}
</pre>
</div>

  </div>
        </div>
    )
}

export default a
