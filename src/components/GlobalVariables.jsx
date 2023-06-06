import React from "react";
import styles from "./styles.module.scss";

const GlobalVariables = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>Global variables</span>
      <div className={styles.content}>
        <p>
          Global variables are in fact properties of the global object. In web
          pages the global object is window, so you can set and access global
          variables using the window.variable syntax.
        </p>
        <p>
          Consequently, you can access global variables declared in one window
          or frame from another window or frame by specifying the window or
          frame name. For example, if a variable called phoneNumber is declared
          in a document, you can refer to this variable from an iframe as
          parent.phoneNumber.
        </p>
      </div>
    </div>
  );
};

export default GlobalVariables;
