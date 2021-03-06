import React, { useState, useEffect, useRef, RefObject } from "react";
import Hero from "../containers/Hero/index";
// import NewsWrapper from "../containers/News";
import Movies from "../containers/Movies";
import TableListings from "../containers/TableListings";

const Home = () => {
  const trackerSection = useRef<HTMLDivElement | any>(null);

  const scrollToTracker = () => {
    trackerSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {}, []);
  return (
    <div className="landing-page">
      <Hero scrollToTracker={scrollToTracker} />
      {/* <TableListings /> */}
      <div ref={trackerSection}>
        <Movies />
      </div>
    </div>
  );
};

export default Home;
