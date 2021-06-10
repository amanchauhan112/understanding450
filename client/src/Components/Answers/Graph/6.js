import React from 'react'
import '../../Answers/answer.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


class one extends React.Component {

render(){
    return (
        <div className="div"  style={{justifyContent:'center',marginBottom:"20px"}}>

         
        <div className="ans_heading">
         <h1 >Word ladder</h1><br/>
         </div>
         <br></br>
         <div style={{border:'2px solid black',marginLeft:'2%',marginBottom:'10%',marginRight:'2%',borderRadius:'50px 50px 50px 50px',marginBottom:"100px",padding:'10px',justifyContent:'center',overflowX:"auto",scrollMargin:"0px",overflowWrap:"break-word"}}>


<h1>Optimal Approach :</h1>

<p>1.Firstly, We create a set and push all strings from dictionary to it.
</p>
<p>2.Now we will assure that last word is in the set,if not return -1 else
    do:
</p>
<p>:Push begin word to queue and while queue not empty , do following steps: </p>
<p>::take a integer (lvl/ladder) and keep incrementing it when while loop ends(i.e. we reach next lvl of graph).</p>
<p>::Take all word one by one from queue and remove selected word.</p>
<p>::now remove each charachter of each word one by one by 'a' to 'z' charachters excluding original charachter</p>
<p>::if any newly created word during this present in set , push it in queue</p>
<p>::keep checking if these word are same as end word on not.If same then end loops.</p>
{/* <h2><a href="https://github.com">Code link</a></h2> */}
<h2>Code</h2>
<h3>
    T.C:<br/>
    S.C:
</h3>
<pre className="code">

    {

        `
   int ladderLength(string beginWord, string endWord, 
                    vector<string>& wordList) .
    {   
    unordered_set<string> dict(wordList.begin(), wordList.end());
        queue<string> todo;
        todo.push(beginWord);
        int ladder = 1;
        while (!todo.empty()) {
            int n = todo.size();
            for (int i = 0; i < n; i++) {
                string word = todo.front();
                todo.pop();
                if (word == endWord) {
                    return ladder;
                }
                dict.erase(word);
                for (int j = 0; j < word.size(); j++) {
                    char c = word[j];
                    for (int k = 0; k < 26; k++) {
                        word[j] = 'a' + k;
                        if (dict.find(word) != dict.end()) {
                            todo.push(word);
                        }
                     }
                    word[j] = c;
                }
            }
            ladder++;
        }
        return 0;
    }
        `
    }
</pre>

      
      
         </div>
 
       </div>
    )
}
}

export default one;
