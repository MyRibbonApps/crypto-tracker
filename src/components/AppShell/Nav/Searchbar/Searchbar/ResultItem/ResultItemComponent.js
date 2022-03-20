import "./ResultItemComponent.scss";
const ResultItemComponent = ({ coin }) => {
  return (
    <>
      <span className="searchbar-result-leftcontent">
        <img
          className="searchbar-result-leftcontent__img"
          src={coin.thumb}
        ></img>
        <h3 className="searchbar-result-leftcontent__name">{coin.name}</h3>
        <p className="searchbar-result-leftcontent__symbol">{coin.symbol}</p>
      </span>
      <span className="searchbar-result-rightcontent">
        <p className="searchbar-result-rightcontent__cap">
          #{coin.market_cap_rank}
        </p>
      </span>
    </>
  );
};

export default ResultItemComponent;
