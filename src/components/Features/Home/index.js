import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import Information from "./Information";
import Tracker from "./Tracker";

const Home = () => {
  const [coinsData, setCoinsData] = useState([]);
  const trackerSection = useRef(null);

  const scrollToTracker = () => {
    trackerSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="landing-page">
      <Hero scrollToTracker={scrollToTracker} />
      <div ref={trackerSection}>
        <Tracker />
      </div>
    </div>
  );
};

export default Home;
