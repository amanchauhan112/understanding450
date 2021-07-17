import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1></h1>
      </div>
      <br/>
      <div className="solution">

        <h1>Optimal Approach :</h1>
<p>Make an array of 256 size(NO_OF_CHARS variable below) and store in it and print if duplicates</p>
<p>We can also use maps for it(O(n) Space).</p>
   <h2>Code</h2>
    <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>

        <pre className="code">
    {
        `
void fillCharCounts(char *str, int *count)
    {
        int i;
        for (i = 0; *(str + i); i++)
        count[*(str + i)]++;
    }
 
void printDups(char *str)
    {

        int *count = (int *)calloc(NO_OF_CHARS,sizeof(int));
        fillCharCounts(str, count);
 
        int i;
        for (i = 0; i < NO_OF_CHARS; i++)
        if(count[i] > 1)
            printf("%c, count = %d ", i, count[i]);
 
        free(count);
    }
        `
}
</pre>
      </div>


    </div>
  );
};

export default String;