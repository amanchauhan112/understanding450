import React from "react";
import "../../Answers/answer.css";

const sq = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Reverse a stack using recursion</h1>
      </div>

<br/>
      <div className="solution">

      <h1>Optimal Approach :</h1>
<p>As we inserted elements at bottom of stack previously (Check <a href="/sq_13">here</a>) </p>
<p>We will do same thing here as well , first recursively pop elements then insert them at bottom of stack</p>
        <h2>Code</h2>

        {/* <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3> */}

        <pre className="code">
          {`

          //Current stack [1 2 3 4(Top)]

           static void insert_at_bottom(char x){

            if(st.isEmpty())
                st.push(x);
        
            else{
              
                char a = st.peek();
                st.pop();
      
                insert_at_bottom(x);
      
                st.push(a);
            }
        }


    char reverse()
    {
        if(st.size()>0)
        {
             //here we pick 4 3 2 1
            char x = st.top();
            st.pop();
            reverse();

            insert_at_bottom(x);

            //First 1 will be inserted
            //Then 2 at bottom and 1 at top
            //Then 3 at bottom and 1 at top
            //Then 4 at bottom and 1 at top

            //Final stack [ 4 3 2 1(Top) ] 
        }
    }
            `}
        </pre>
      </div>
    </div>
  );
};

export default sq;
