import React, { useState, useEffect, useRef, RefObject } from "react";
import Hero from "../containers/Hero/index";
import NewsWrapper from "../containers/News";
// import Tracker from "./Tracker";

const Home = () => {
  const trackerSection = useRef<HTMLDivElement | any>(null);

  const scrollToTracker = () => {
    trackerSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
  }, []);
  return (
    <div className="landing-page">
      <Hero scrollToTracker={scrollToTracker} />
      <div ref={trackerSection}>
        <NewsWrapper />
      </div>
    </div>
  );
};

export default Home;