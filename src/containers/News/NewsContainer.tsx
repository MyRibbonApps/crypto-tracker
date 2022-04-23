import { useState, useEffect, useRef } from "react";
import NewsCardComponent from "../../components/NewsCard/NewsCardComponent";
import { getApiRequest } from "../../shared/api";
import dragFunction from "./Drag";
import "./styles.scss";

type NewsData = {};
const NewsWrapper = () => {
  const [newsData, setNewsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const { onMouseDown } = dragFunction(ref);
  const cacheData = (data: any[]) => {
    try {
      const details = {
        expires: new Date().setMinutes(new Date().getMinutes() + 10),
      };
      const newsToString = JSON.stringify(data);
      const detailsToString = JSON.stringify(details);

      localStorage.setItem("CACHED_NEWS_DATA", newsToString);
      localStorage.setItem("CACHED_NEWS_DETAILS", detailsToString);
    } catch (e) {
      console.log(e);
    }
  };

  const getCacheData: () => any[] | null = () => {
    try {
      const getDetails = localStorage.getItem("CACHED_NEWS_DETAILS");
      if (!getDetails) return null;

      const parseDetails = JSON.parse(getDetails);

      if (new Date(parseDetails.expires).getTime() > new Date().getTime()) {
        const getData = localStorage.getItem("CACHED_NEWS_DATA");

        if (!getData) return null;
        const parseData = JSON.parse(getData);
        return parseData;
      }
      return null;
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    //
    const getNews = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const cachedData = getCacheData();
        if (cachedData) {
          setNewsData(cachedData);
          setIsLoading(false);
          return;
        }

        const result = await getApiRequest("http://localhost:3001/api/getNews");
        if (!result) throw new Error();

        cacheData(result);
        setNewsData(result);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setError(true);
      }
    };
    getNews();
  }, []);
  return (
    <>
      {/* <NewsComponent data={newsData} isLoading={isLoading} error={error} /> */}

    <section className="news">
      <h1 className="news__h1">Latest news</h1>
      <p className="news__p">Stay up to date with the news!</p>

      <div
        className="news-section"
        ref={ref}
        onMouseDownCapture={onMouseDown}
        onMouseUpCapture={() => console.log("NOW")}
      >
        {!isLoading && !error ? (
          newsData.map((item) => (
            <a href={item.url} target="_blank" draggable="false">
              <NewsCardComponent data={item} />
            </a>
          ))
        ) : !error ? (
          <h1>Loading....</h1>
        ) : (
          <h1>Error</h1>
        )}
      </div>
    </section>
    </>
  );
};

export default NewsWrapper;
