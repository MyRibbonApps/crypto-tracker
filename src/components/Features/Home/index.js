import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import Information from "./Information";
import Tracker from "./Tracker";

const Home = () => {
  const [coinsData, setCoinsData] = useState([]);
  useEffect(async () => {
    const getData = async () => {
      try {
        const data = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const jsonData = await data.json();
        return jsonData;
      } catch (e) {
        return null;
      }
    };
    console.log(await getData());

    const finalData = await getData();
    if (finalData) {
      setCoinsData(finalData);
      return;
    }
    setCoinsData(null);
  }, []);
  return (
    <div className="landing-page">
      <Hero />
      <Tracker data={coinsData} />
    </div>
  );
};

export default Home;
