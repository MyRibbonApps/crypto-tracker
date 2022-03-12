import { Link } from "react-router-dom";
import "./TrackerItem.scss";
const TrackerItem = ({
  data,
  data: {
    name = "",
    symbol = null,
    image = null,
    current_price = null,
    price_change_percentage_24h = null,
    circulating_supply = null,
    market_cap = null,
  },
  skeleton,
}) => {
  const test = { title: "Hey!!!!" };
  const { title } = test;
  const titleOther = test.title;
  console.log(title, titleOther);
  // This commponent is reendered 100 times becuase we hhhave 100 items, that is why it says null 100 times...
  return (
    <>
      {skeleton ? (
        <section className="trackeritem-section">
          <div className="trackeritem-section--coin-row">
            <div className="skeleton-section1">
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton-text-wrapper">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text2"></div>
              </div>
            </div>
            <div className="skeleton-section2">
              <div className="skeleton-text-wrapper">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text2"></div>
              </div>
            </div>
            <div className="skeleton-section3">
              <div className="skeleton-text-wrapper">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text2"></div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="trackeritem-section">
          <Link to="/signup">
            <div
              onClick={() => console.log(data)}
              className="trackeritem-section--coin-row"
            >
              <div className="trackeritem-section--coin">
                <img className="trackeritem-section__img" src={image}></img>
                <h1 className="trackeritem-section__h1">{name}</h1>
                <p className="trackeritem-section__p trackeritem-section__symbol">
                  {symbol}
                </p>
              </div>
              <div className="trackeritem-section--coin-data">
                <p className="trackeritem-section__p">
                  ${current_price?.toLocaleString()}
                </p>
                <p className="trackeritem-section__p">
                  {price_change_percentage_24h}%
                </p>
              </div>
              <div className="trackeritem-section--coin-data">
                <p className="trackeritem-section__p">
                  ${market_cap?.toLocaleString()}
                </p>
                <p className="trackeritem-section__p">
                  ${circulating_supply?.toLocaleString()}
                </p>
              </div>
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default TrackerItem;
