import { useRef } from "react";
import dragFunction from "./Drag.js";
import NewsCardComponent from "./NewsCardComponent/NewsCardComponent.js";
import "./NewsComponent.scss";
const NewsComponent = ({ data = [], isLoading, error }) => {
  const ref = useRef(null);

  const { onMouseDown } = dragFunction(ref, { direction: "horizontal" });

  const test = () => {
    const last = Array.from(document.querySelectorAll(".news-section")).pop();
    console.log(last);
    // for (let i of last) {
    //   console.log(i);
    // }
  };
  return (
    <section className="news">
      <h1 className="news__h1">Latest news</h1>
      <p className="news__p">Stay up to date with the news!</p>

      <div
        className="news-section"
        ref={ref}
        onClick={test}
        onMouseDownCapture={onMouseDown}
        onMouseUpCapture={() => console.log("NOW")}
      >
        {!isLoading && !error ? (
          data.map((item) => (
            // <a href={item.url} target="_blank">
            <a>
              <NewsCardComponent data={item} />
            </a>
          ))
        ) : !error ? (
          <h1>Loading....</h1>
        ) : (
          <h1>Error</h1>
        )}
        <div className="news-section-next">NEXT</div>
      </div>
    </section>
  );
};

export default NewsComponent;
