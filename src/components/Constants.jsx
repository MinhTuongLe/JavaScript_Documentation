import React from "react";
import styles from "./styles.module.scss";

const Constants = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>Constants</span>
      <div className={styles.content}>
        <p style={{marginBottom: 0}}>
          You can create a read-only, named constant with the const keyword. The
          syntax of a constant identifier is the same as for a variable
          identifier: it must start with a letter, underscore or dollar sign and
          can contain alphabetic, numeric, or underscore characters.
        </p>
        <div className={styles.code_block}>
          <code>const PI = 3.14;</code>
        </div>
        <p>
          A constant cannot change value through assignment or be re-declared
          while the script is running. It has to be initialized to a value.
        </p>
        <p>
          The scope rules for constants are the same as those for let block
          scope variables. If the const keyword is omitted, the identifier is
          assumed to represent a variable.
        </p>
        <p style={{marginBottom: 0}}>
          You cannot declare a constant with the same name as a function or
          variable in the same scope. For example:
        </p>
        <div className={styles.code_block}>
          <code>
            // THIS WILL CAUSE AN ERROR function f() {}; const f = 5; // THIS
          </code>
          <code>
            WILL CAUSE AN ERROR ALSO function f() &#123; const g = 5; var g;
          </code>
          <code>//statements &#125;</code>
        </div>
        <p style={{marginBottom: 0}}>
          However, object attributes are not protected, so the following
          statement is executed without problems.
        </p>
        <div className={styles.code_block}>
          <code>
            const MY_OBJECT = &#123;"key": "value"&#125;; MY_OBJECT.key =
          </code>
          <code>"otherValue";</code>
        </div>
      </div>
    </div>
  );
};

export default Constants;
