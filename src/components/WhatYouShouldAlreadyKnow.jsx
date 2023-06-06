import React from "react";
import styles from "./styles.module.scss";

const WhatYouShouldAlreadyKnow = () => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>What you should already know</span>
      <div className={styles.content}>
        <p>This guide assumes you have the following basic background:</p>
        <ul>
          <li>
            A general understanding of the Internet and the World Wide Web
            (WWW).
          </li>
          <li>Good working knowledge of HyperText Markup Language (HTML).</li>
          <li>
            Some programming experience. If you are new to programming, try one
            of the tutorials linked on the main page about JavaScript.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatYouShouldAlreadyKnow;
