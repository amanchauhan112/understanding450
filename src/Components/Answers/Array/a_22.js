import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Find factorial of a large number</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<p>You should try this approach using pen paper for better understanding.</p>
<p>The basic idea we are using here is , we are storing each digit of our answer in array</p>
<p>First initialize array and its first digit as one.</p>
<p>We will go from 2 to n using start variable</p>
<p>we are multiplying digits , then we are storing in array </p>
<p>We are also adding it as</p>
<p>When we multiply 24 with 5 -{">"} we do 5*4 ={">"} 20 ,then we write 0</p>
<p>then  5*2 + 2 = 12 ( So the 2 here is num that we are adding here is in our first while loop)</p>

<h2>Code</h2>
<h3>
T.C:O(n)<br/>
S.C:O(1)
</h3>
<pre className="code">
{
`
int main() {
	//code
	
	int t;
	cin>>t;

	while(t--)
	{
	    int n;
	    cin>>n;
	    
        int arr[10000]={0};

        arr[0]=1;

        int len=1;  //len of answer(Factorial)
     
        int x=0;        //Counter variable
        
        int start=2;        //From 2 to n
        
        while(start<=n)
        {
          x=0;
          int num=0;
          
        while(x<len)
        {
            arr[x]=arr[x]*start;  
            
            arr[x]=arr[x]+num;
            
            num=arr[x]/10;
            
            arr[x]=arr[x]%10;
            
            x++;
        }
        
	    
	    while(num!=0)
	    {
	        arr[len]=num%10;
	        num=num/10;
	        len++;
	    }
	    
	    start++;
            
        }
        
	    
	    while(len>0)
	    {
	        cout<<arr[--len];
	    }
	    
	   cout<<endl;
	}
	
	return 0;

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
