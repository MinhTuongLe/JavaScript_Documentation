import React from "react";
import styles from "./styles.module.scss";

const FunctionDeclarations = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>Function declarations</span>
      <div className={styles.content}>
        <p>
          A function definition (also called a function declaration, or function
          statement) consists of the function keyword, followed by:
        </p>
        <ul>
          <li>The name of the function.</li>
          <li>
            A list of arguments to the function, enclosed in parentheses and
            separated by commas.
          </li>
          <li style={{ marginBottom: "16px" }}>
            The JavaScript statements that define the function, enclosed in
            curly brackets, {}.
          </li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          For example, the following code defines a simple function named
          square:
        </p>
        <div className={styles.code_block}>
          <code>
            function square(number) &#123; return number * number; &#125;
          </code>
        </div>
        <p style={{ marginBottom: 0 }}>
          The function square takes one argument, called number. The function
          consists of one statement that says to return the argument of the
          function (that is, number) multiplied by itself. The return statement
          specifies the value returned by the function.
        </p>
        <div className={styles.code_block}>
          <code>return number * number;</code>
        </div>
        <p>
          Primitive parameters (such as a number) are passed to functions by
          value; the value is passed to the function, but if the function
          changes the value of the parameter, this change is not reflected
          globally or in the calling function.
        </p>
      </div>
    </div>
  );
};

export default FunctionDeclarations;
