import "./NewsCardComponent.scss";
import arrow from "../../../src/right-arrow.png";
import { FC } from "react";
const NewsCardComponent: FC<any> = ({ data }) => {
  return (
    <section className="newscard">
      <div className="newscard-imagewrapper">
        <img
          draggable="false"
          className="newscard-imagewrapper__img"
          src={data.img}
        ></img>
        <img
          draggable="false"
          className="newscard-imagewrapper__arrowicon"
          src={arrow}
        ></img>
      </div>
      <h1 className="newscard__h1">{data.title}</h1>
      <p className="newscard__p">{data.source}</p>
    </section>
  );
};
export default NewsCardComponent;
