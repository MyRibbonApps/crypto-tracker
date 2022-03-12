import { useEffect, useState } from "react";
import SearchBar from "../../../Common/SearchBar";
import Information from "../Information";
import "./Tracker.scss";
import TrackerItem from "./TrackerItem";

const Tracker = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(null);
  const [dataToRender, setDataToRender] = useState([]);
  const [skeleton, setSkeleton] = useState(false);

  // Creates an array with 100 objects with a unique number in each..
  const generateSkeleton = () => {
    const arr = Array.apply(null, Array(10));
    const genskel = arr.map((item, index) => {
      return { id: index };
    });
    return genskel;
  };

  // Will get the initial data
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

  const getAndRenderData = async () => {
    const generatedSkeleton = generateSkeleton();
    setDataToRender(generatedSkeleton);
    setSkeleton(true);
    const finalData = await getData();
    if (finalData) {
      setCoinsData(finalData);
      setDataToRender(finalData);
      setSkeleton(false);
      return;
    }
    // This will show an error because it is null.
    setDataToRender(null);
    setCoinsData(null);
  };

  // Initital render where we get the data and display it
  useEffect(() => {
    getAndRenderData();
  }, []);

  // If we search and need to show thhe search results
  useEffect(() => {
    if (showSearchResults) {
      setDataToRender(showSearchResults);
      return;
    }
    // If search is null which means we have not searched for anything - show the initial coindata.
    if (coinsData?.length > 0) getAndRenderData();
  }, [showSearchResults]);

  return (
    <section className="tracker-section">
      <div className="tracker-section__textwrapper">
        <h1 className="tracker-section__textwrapper__h1">
          <span className="tracker-section__textwrapper__h1--underline">
            Cryptocurrency by <br className="hideDeskop"></br>
            <span className="tracker-section__textwrapper__h1--mobileunderline">
              Market Cap
            </span>
          </span>
        </h1>
      </div>
      <Information />
      <div className="tracker-section__searchbarwrapper">
        <SearchBar searchResults={setShowSearchResults} />
      </div>
      <div className="tracker-section__tracker">
        {/* <h1 style={{ color: "white" }}>Categories</h1> */}
        <section className="trackeritem-section trackeritem-section__info">
          <div className="trackeritem-section--coin-row">
            <div className="trackeritem-section--coin">
              <h1 className="trackeritem-section__h1">Name</h1>
              <h1 className="trackeritem-section__h1"> </h1>
              <h1 className="trackeritem-section__h1"></h1>
            </div>
            <div className="trackeritem-section--coin-data">
              <p className="trackeritem-section__p">Price</p>
              <p className="trackeritem-section__p">24%</p>
            </div>
            <div className="trackeritem-section--coin-data">
              <p className="trackeritem-section__p">Markte cap</p>
              <p className="trackeritem-section__p">Volume</p>
            </div>
          </div>
        </section>
        {dataToRender ? (
          <div>
            {dataToRender.map((item) => {
              return (
                <div className="track" key={item.id}>
                  <TrackerItem data={item} skeleton={skeleton} />
                </div>
              );
            })}
            PREV NEXT
          </div>
        ) : (
          <h1
            style={{ color: "white", textAlign: "center", marginTop: "2rem" }}
          >
            Oops, something went wrong try again...
          </h1>
        )}
      </div>
    </section>
  );
};

export default Tracker;
