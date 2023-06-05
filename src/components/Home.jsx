import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import WhatYouShouldAlreadyKnow from "./WhatYouShouldAlreadyKnow";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <WhatYouShouldAlreadyKnow />
    </div>
  );
};

export default Home;
