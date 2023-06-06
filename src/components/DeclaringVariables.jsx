import React from "react";
import styles from "./styles.module.scss";

const DeclaringVariables = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>Declaring variables</span>
      <div className={styles.content}>
        <p style={{marginBottom: 0}}>You can declare a variable in three ways:</p>
        <div style={{margin:"18px 0"}}>
          <p style={{marginBottom:0}}>With the keyword var. For example,</p>
          <div className={styles.code_block}>
            <code>var x = 42.</code>
          </div>
          <p>
            This syntax can be used to declare both local and global variables.
          </p>
        </div>
        <div style={{margin:"18px 0"}}>
          <p style={{marginBottom:0}}>By simply assigning it a value. For example,</p>
          <div className={styles.code_block}>
            <code>x = 42.</code>
          </div>
          <p>
            This always declares a global variable. It generates a strict
            JavaScript warning. You shouldn't use this variant.
          </p>
        </div>
        <div style={{margin:"18px 0"}}>
          <p style={{marginBottom:0}}>With the keyword let. For example,</p>
          <div className={styles.code_block}>
            <code>let y = 13.</code>
          </div>
          <p>
            This syntax can be used to declare a block scope local variable. See
            Variable scope below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeclaringVariables;
