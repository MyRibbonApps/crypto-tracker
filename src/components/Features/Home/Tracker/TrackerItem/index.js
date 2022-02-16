import "./TrackerItem.scss";
const TrackerItem = ({
  data: {
    name,
    symbol,
    image,
    current_price,
    price_change_percentage_24h,
    circulating_supply,
    market_cap,
  },
}) => {
  return (
    <>
      <section className="trackeritem-section">
        <div className="trackeritem-section--coin-row">
          <div className="trackeritem-section--coin">
            <img className="trackeritem-section__img" src={image}></img>
            <h1 className="trackeritem-section__h1">{name}</h1>
            <p className="trackeritem-section__p trackeritem-section__symbol">
              {symbol}
            </p>
          </div>
          <div className="trackeritem-section--coin-data">
            <p className="trackeritem-section__p">
              ${current_price.toLocaleString()}
            </p>
            <p className="trackeritem-section__p">
              {price_change_percentage_24h}%
            </p>
          </div>
          <div className="trackeritem-section--coin-data">
            <p className="trackeritem-section__p">
              ${market_cap.toLocaleString()}
            </p>
            <p className="trackeritem-section__p">
              ${circulating_supply.toLocaleString()}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackerItem;
