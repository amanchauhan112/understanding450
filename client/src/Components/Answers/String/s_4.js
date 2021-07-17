import React from "react";
import "../../Answers/answer.css";

const String = () => {
  return (
    <div className="div">

      <div className="ans_heading">
        <h1>Why strings are immutable in Java?</h1>
      </div>
      <br/>
      <div className="solution">


        <pre className="code">
    {
        `
When we do any operation on string in java , it creates new Object.
    For eg. ->         String NewString = "Hello";    
                          NewString.concat("World");  
       
    Print NewString : Hello

    Here, value of string is not changed.

    So, in order to change it, we need to change previous string as a new string:

    String NewString = "Hello";    
    NewString = NewString.concat("World");  

     Output : HelloWorld
       
       `
}
</pre>

      </div>


    </div>
  );
};

export default String;