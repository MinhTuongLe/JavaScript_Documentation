import React from "react";
import styles from "./styles.module.scss";

const HelloWorld = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>Hello world</span>
      <div className={styles.content}>
        <p style={{marginBottom: 0}}>
          To get started with writing JavaScript, open the Scratchpad and write
          your first "Hello world" JavaScript code:
        </p>
        <div className={styles.code_block}>
            <code>function greetMe(yourName) &#123; alert("Hello " + yourName); &#125;</code>
            <code>greetMe("World");</code>
        </div>

        <p>
          Select the code in the pad and hit Ctrl+R to watch it unfold in your
          browser!
        </p>
      </div>
    </div>
  );
};

export default HelloWorld;
