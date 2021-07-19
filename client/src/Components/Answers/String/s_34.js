import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Rearrange characters in a string such that no two adjacent are same</h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
        <p>First store frequency of each character.</p>
        <p>Insert character with frequency in Priority queue and in the end add -1,#</p>
<p>For each element in P.Q. we will add it to String and if freq more than 0 , add it back to queue and decrement its frequency</p>



 <h2>Code</h2>
    <h3>
          T.C:O(nlogn)
          <br />
          S.C:O(1)
    </h3>

        <pre className="code">
        {
            `
void rearrangeString(string str)
    {
              int n = str.length();
             
              int count[MAX_CHAR] = { 0 };

              for (int i = 0; i < n; i++)
                  count[str[i] - 'a']++;
             
              priority_queue<Key> pq;
                
              for (char c = 'a'; c <= 'z'; c++)
                    if (count)
                        pq.push(Key{ count, c });
             
              str = "";
             
                // work as the previous visited element
                // initial previous element be. ( '#' and
                // it's frequency '-1' )

              Key prev{ -1, '#' };
             
              while (!pq.empty()) 
              {

                    Key k = pq.top();
                    pq.pop();

                    str = str + k.ch;
             
                    if (prev.freq > 0)
                        pq.push(prev);

                    (k.freq)--;

                    prev = k;
              }
             
                // If length of the resultant string and original
                // string is not same then string is not valid

                if (n != str.length())
                    cout <<" Not valid String "<<endl;
                else
                    cout <<str<<endl;
    }
            `
        }
        </pre>

<h2>T.C:O(n) Solution , Space:O(n+26)</h2>
<p>Here, we are storing most frequent occuring element in even places , then fill remaining  and in this way no two characters wil collide.</p>
<pre className="code">
  {
      `
char getMaxCountChar(const vector<int>& count)
{
    int max = 0;
    char ch;

    for (int i = 0; i < 26; i++) 
    {
        if (count[i] > max)
        {
            max = count[i];
            ch = 'a' + i;
        }
    }
    return ch;
}
 
string rearrangeString(string S)
{
 
    int n = S.size();

    if (!n)
      return "";
 
    vector<int> count(26, 0);

    for (auto ch : S)
        count[ch - 'a']++;
 
    char ch_max = getMaxCountChar(count);

    int maxCount = count[ch_max - 'a'];
 
    // check if the result is possible or not

    if (maxCount > (n + 1) / 2)
        return "";
 
    string res(n,' ');
 
    int ind = 0;

    // filling the most frequently occuring char in the even indices

    while (maxCount) 
    {
        res[ind] = ch_max;
        ind = ind + 2;
        maxCount--;
    }

    count[ch_max - 'a'] = 0;
 
    // now filling the other Chars, first filling the even
    // positions and then the odd positions

    for (int i = 0; i < 26; i++) 
    {
        while (count[i] > 0) 
        {
            ind = (ind >= n) ? 1 : ind;
            res[ind] = 'a' + i;
            ind += 2;
            count[i]--;
        }
    }
    return res;
}
 
      `
  }
</pre>

<p>Solution using HashMap : <a href="https://www.geeksforgeeks.org/rearrange-characters-in-a-string-such-that-no-two-adjacent-are-same-using-hashing/#:~:text=Rearrange%20characters%20in%20a%20string%20such%20that%20no,else%20print%20No.%20%E2%80%9Cegeksforegeks%E2%80%9D%20is%20one%20such%20arrangement.">here</a></p>
    </div>


    </div>
  );
};

export default String;