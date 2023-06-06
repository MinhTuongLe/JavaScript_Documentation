import React from "react";
import styles from "./styles.module.scss";

const DataTypes = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>Data types</span>
      <div className={styles.content}>
        <p>The latest ECMAScript standard defines seven data types:</p>
        <ul>
          <li>
            Six data types that are primitives:
            <ul style={{marginTop: "16px"}}>
              <li>Boolean. true and false.</li>
              <li>
                null. A special keyword denoting a null value. Because
                JavaScript is case-sensitive, null is not the same as Null,
                NULL, or any other variant.
              </li>
              <li>undefined. A top-level property whose value is undefined.</li>
              <li>Number. 42 or 3.14159.</li>
              <li>String. "Howdy"</li>
              <li>
                Symbol (new in ECMAScript 2015). A data type whose instances are
                unique and immutable.
              </li>
            </ul>
          </li>
          <li style={{ marginBottom: "16px" }}>and Object</li>
        </ul>
        <p>
          Although these data types are a relatively small amount, they enable
          you to perform useful functions with your applications. Objects and
          functions are the other fundamental elements in the language. You can
          think of objects as named containers for values, and functions as
          procedures that your application can perform.
        </p>
      </div>
    </div>
  );
};

export default DataTypes;
