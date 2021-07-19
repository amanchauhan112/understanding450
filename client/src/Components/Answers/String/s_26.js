import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Roman Number to Integer</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>We just need to check if curr value less than next value, subtract curr value ans else add it.</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
int value(string str,int i)
{
                
    if(str[i]=='I')
        return 1;
    else if(str[i]=='V')
        return 5;
    else if(str[i]=='X')
        return 10;
    else if(str[i]=='L')
        return 50; 
    else if(str[i]=='C')
        return 100;
    else if(str[i]=='D')
         return 500;
    else if(str[i]=='M')
         return 1000;
                
    return 0;
}
            
int romanToDecimal(string &str) {
    // code here
    int i=0;
    int ans=0;
                
    for(i=0;i<str.length();i++)
    {
      if((i<str.length()-1)&&value(str,i)<value(str,i+1))
          ans-=value(str,i);
      else
          ans+=value(str,i);
    }
                
    return ans;
                    
}
            `
        }
        </pre>

        Few more solutions <a href="https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/">here</a>

    </div>


    </div>
  );
};

export default String;