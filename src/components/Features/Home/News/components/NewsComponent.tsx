import { FC, useRef } from "react";
import dragFunction from "./Drag";
import NewsCardComponent from "./NewsCardComponent/NewsCardComponent";
import "./NewsComponent.scss";

type Props = {
  data: any[];
  isLoading: boolean;
  error: boolean;
};
const NewsComponent: FC<Props> = ({ data = [], isLoading, error }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { onMouseDown } = dragFunction(ref);

  return (
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
          data.map((item) => (
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
  );
};

export default NewsComponent;
