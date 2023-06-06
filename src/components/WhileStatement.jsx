import React from "react";
import styles from "./styles.module.scss";

const WhileStatement = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>while statement</span>
      <div className={styles.content}>
        <p style={{ marginBottom: 0 }}>
          A while statement executes its statements as long as a specified
          condition evaluates to true. A while statement looks as follows:
        </p>
        <div className={styles.code_block}>
          <code>while (condition) statement</code>
        </div>
        <p>
          If the condition becomes false, statement within the loop stops
          executing and control passes to the statement following the loop.
        </p>
        <p>
          The condition test occurs before statement in the loop is executed. If
          the condition returns true, statement is executed and the condition is
          tested again. If the condition returns false, execution stops and
          control is passed to the statement following while.
        </p>
        <p>
          To execute multiple statements, use a block statement (&#123; ...
          &#125;) to group those statements.
        </p>
        <p>Example:</p>
        <p style={{ marginBottom: 0 }}>
          The following while loop iterates as long as n is less than three:
        </p>
        <div className={styles.code_block}>
          <code>
            var n = 0; var x = 0; while (n &#60; 3) &#123; n++; x += n; &#125;
          </code>
        </div>
        <p>
          With each iteration, the loop increments n and adds that value to x.
          Therefore, x and n take on the following values:
        </p>
        <ul>
          <li>After the first pass: n = 1 and x = 1</li>
          <li>After the second pass: n = 2 and x = 3</li>
          <li style={{ marginBottom: "16px" }}>
            After the third pass: n = 3 and x = 6
          </li>
        </ul>
        <p>
          After completing the third pass, the condition n &#60; 3 is no longer
          true, so the loop terminates.
        </p>
      </div>
    </div>
  );
};

export default WhileStatement;
