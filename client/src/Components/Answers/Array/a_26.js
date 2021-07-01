import React from 'react'
import '../../Answers/answer.css';

const a = () => {
    return (
        <div>
             <div className="div">

 
<div className="ans_heading">

    <h1 >Maximum profit by buying and selling a share atmost twice</h1><br/>
    </div>

    <br></br>
    <div className="solution">
<div>

<h1>Optimal Approach :</h1>
<h2>Code:</h2>
<p>Both are from <a href="https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/">GFG</a></p>
<pre className="code">
{
`
int maxProfit(int price[], int n)
{
    // Create profit array and initialize it as 0
    
    int* profit = new int[n];

    for (int i = 0; i < n; i++)
        profit[i] = 0;
 
    /* Get the maximum profit with only one transaction allowed. 
    After this loop, profit[i] contains maximum profit from price[i..n-1]
       using at most one trans. */

    int max_price = price[n - 1];
    for (int i = n - 2; i >= 0; i--) {

        if (price[i] > max_price)
            max_price = price[i];
 
        // we can get profit[i] by taking maximum of:
        // a) previous maximum, i.e., profit[i+1]
        // b) profit by buying at price[i] and selling at max_price
      
        profit[i]= max(profit[i + 1], max_price - price[i]);
    }
 
    /* Get the maximum profit with two transactions allowed
       After this loop, profit[n-1] contains the result */
    
    int min_price = price[0];
    for (int i = 1; i < n; i++) {

        if (price[i] < min_price)
            min_price = price[i];
 
        // Maximum profit is maximum of:
        // a) previous maximum, i.e., profit[i-1]
        // b) (Buy, Sell) at (min_price, price[i]) and add
        //    profit of other trans. stored in profit[i]
        profit[i] = max(profit[i - 1],
                        profit[i] + (price[i] - min_price));
    }
    int result = profit[n - 1];
    delete[] profit; // To avoid memory leak
 
    return result;
}
`
}
</pre>
<h2>Using DP:</h2>
<p>We will add to profit if we are getting profit after selling next day</p>
<pre>
    {
        `
        int main()
{
    int price[] = { 2, 30, 15, 10, 8, 25, 80 };
    int n = 7;

    int profit = 0;

    // valley-peak approach
    /*
                       80
                       /
        30            /
       /  \          25
      /    15       /
     /      \      /
    2        10   /
               \ /
                8
     */
    for (int i = 1; i < n; i++)
    {
 
        int sub = price[i] - price[i - 1];
        if (sub > 0)
            profit += sub;
    }
 
    cout << "Maximum Profit=" << profit;
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
