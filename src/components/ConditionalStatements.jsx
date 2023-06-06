import React from "react";
import styles from "./styles.module.scss";

const ConditionalStatements = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>if...else statement</span>
      <div className={styles.content}>
        <p style={{ marginBottom: 0 }}>
          Use the if statement to execute a statement if a logical condition is
          true. Use the optional else clause to execute a statement if the
          condition is false. An if statement looks as follows:
        </p>
        <div className={styles.code_block}>
          <code>
            if (condition) &#123; statement_1; &#125; else &#123; statement_2;
            &#125;
          </code>
        </div>
        <p>
          condition can be any expression that evaluates to true or false. See
          Boolean for an explanation of what evaluates to true and false. If
          condition evaluates to true, statement_1 is executed; otherwise,
          statement_2 is executed. statement_1 and statement_2 can be any
          statement, including further nested if statements.
        </p>
        <p style={{ marginBottom: 0 }}>
          You may also compound the statements using else if to have multiple
          conditions tested in sequence, as follows:
        </p>
        <div className={styles.code_block}>
          <code>
            if (condition_1) &#123; statement_1; &#125; else if (condition_2)
            &#123;
          </code>
          <code>
            statement_2; &#125; else if (condition_n) &#123; statement_n; &#125;
            else &#123;
          </code>
          <code>statement_last; &#125;</code>
        </div>
        <p style={{ marginBottom: 0 }}>
          In the case of multiple conditions only the first logical condition
          which evaluates to true will be executed. To execute multiple
          statements, group them within a block statement (&#123; ... &#125;) .
          In general, it's good practice to always use block statements,
          especially when nesting if statements:
        </p>
        <div className={styles.code_block}>
          <code>
            if (condition) &#123; statement_1_runs_if_condition_is_true;
          </code>
          <code>statement_2_runs_if_condition_is_true; &#125; else &#123;</code>
          <code>statement_3_runs_if_condition_is_false;</code>
          <code>statement_4_runs_if_condition_is_false; &#125;</code>
        </div>
        <p style={{ marginBottom: 0 }}>
          It is advisable to not use simple assignments in a conditional
          expression, because the assignment can be confused with equality when
          glancing over the code. For example, do not use the following code:
        </p>
        <div className={styles.code_block}>
          <code>if (x = y) {/* statements here */}</code>
        </div>
        <p style={{ marginBottom: 0 }}>
          If you need to use an assignment in a conditional expression, a common
          practice is to put additional parentheses around the assignment. For
          example:
        </p>
        <div className={styles.code_block}>
          <code>if ((x = y)) {/* statements here */}</code>
        </div>
      </div>
    </div>
  );
};

export default ConditionalStatements;
