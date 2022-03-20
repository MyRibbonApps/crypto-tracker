import { useState, useEffect } from "react";
import { postApiRequest } from "../../../../shared/api/index.js";
import NewsComponent from "./components/NewsComponent.js";

const NewsWrapper = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("Fetch news");
    const body = {
      startFrom: 0,
    };
    //
    const getNews = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const result = await postApiRequest(
          "http://localhost:3001/api/getNews",
          {
            body: JSON.stringify(body),
          }
        );
        console.log(result);

        for (let news of result) {
          console.log(news);
        }
        setNewsData(result);
        setIsLoading(false);
      } catch (e) {
        setError(true);
        console.log(e);
      }
    };
    getNews();
  }, []);
  return (
    <>
      <NewsComponent data={newsData} isLoading={isLoading} error={error} />
    </>
  );
};

export default NewsWrapper;
