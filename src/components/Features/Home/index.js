import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import Information from "./Information";
import NewsWrapper from "./News/NewsWrapper";
import Tracker from "./Tracker";

const Home = () => {
  const [coinsData, setCoinsData] = useState([]);
  const trackerSection = useRef(null);

  const scrollToTracker = () => {
    trackerSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // (async () => {
    //   const news = await fetch("http://localhost:3001/api/getNews");
    //   const result = await news.json();
    //   console.log(result);
    // })();
  }, []);
  return (
    <div className="landing-page">
      <Hero scrollToTracker={scrollToTracker} />
      <div ref={trackerSection}>
        <NewsWrapper />
      </div>
      {/* <div ref={trackerSection}>
        <Tracker />
      </div> */}
    </div>
  );
};

export default Home;
