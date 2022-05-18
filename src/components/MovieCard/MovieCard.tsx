import "./styles.scss";
import spiderMan from "../../assets/spider-man.jpg";
import etherIcon from "../../assets/ether-icon.svg";
import oval from "../../assets/Oval.svg";
import dots from "../../assets/dots.svg";

const MovieCard = () => {
  return (
    <a className="moviecard">
      <div className="moviecard-container">
        <div className="moviecard-container-dots">
          <img className="moviecard-container-dots__img" src={dots} />
        </div>
        <figure className="moviecard-container-image">
          <img className="moviecard-container-image__img" src={spiderMan} />
        </figure>
        <div className="moviecard-container-content">
          <div className="moviecard-container-content-movieinfo">
            <h3 className="moviecard-container-content-movieinfo__title">
              Spiderman
            </h3>
            <div className="moviecard-container-content-movieinfo-icon">
              <img
                className="moviecard-container-content-movieinfo-icon__img"
                src={etherIcon}
              />
            </div>
          </div>
          <div className="moviecard-container-content-priceinfo">
            <h3 className="moviecard-container-content-priceinfo__title">
              32 ETH
            </h3>
            <button className="moviecard-container-content-priceinfo__button">
              Buy now
            </button>
          </div>
          <div className="moviecard-container-content-sellerinfo">
            <img
              className="moviecard-container-content-sellerinfo__img"
              src={oval}
            />
            <h3 className="moviecard-container-content-sellerinfo__title">
              By <strong>Stockholm Cinema</strong>
            </h3>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
