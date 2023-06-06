import React from "react";
import styles from "./styles.module.scss";

const date = new Date();
const year = date.getFullYear();

const Reference = () => {
  return (
    <div className={styles.body} style={{ paddingBottom: "26px" }}>
      <span className={styles.title}>Reference</span>
      <div className={styles.content}>
        <li style={{ paddingLeft: "1%" }}>
          All the documentation in this page is taken from
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            target="_blank"
            style={{ marginLeft: "1.6%" }}
          >
            MDN
          </a>
        </li>
        <li style={{ paddingLeft: "1%" }}>
          Designed By Le Minh Tuong in <span>{year}</span>
        </li>
      </div>
    </div>
  );
};

export default Reference;
