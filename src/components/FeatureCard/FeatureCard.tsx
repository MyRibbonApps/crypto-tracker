import React from "react";
import "./styles.scss";
import spiderMan from "../../assets/spider-man.jpg";
import etherIcon from "../../assets/ether-icon.svg";
import oval from "../../assets/Oval.svg";

type FeatureCardProps = {
  title: string;
};
const FeatureCard = ({ title }: FeatureCardProps) => {
  return (
    <>
      <a className="featurecard">
        <div className="featurecard-container">
          <figure className="featurecard-container-imagecontainer">
            <img
              src={spiderMan}
              alt="Spiderman"
              className="featurecard-container-imagecontainer__img"
            />
          </figure>
          <div className="featurecard-container-content">
            <h2 className="featurecard-container-content__title">Spiderman</h2>
            <p className="featurecard-container-content__description">
              Siderman movie 100 NFTs only!
            </p>
            <div className="featurecard-container-content-prices">
              <div className="featurecard-container-content-prices-price">
                <img
                  src={etherIcon}
                  alt="ether icon"
                  className="featurecard-container-content-prices-price__icon"
                />
                <p className="featurecard-container-content-prices-price__description">
                  0.041 ETH
                </p>
              </div>
              <button className="featurecard-container-content-prices__button">
                Buy now!
              </button>
            </div>
            <div className="featurecard-container-content-seller">
              <img
                src={oval}
                alt="Owner"
                className="featurecard-container-content-seller__img"
              />
              <p className="featurecard-container-content-seller__description">
                By <strong>Stockholm Cinema</strong>
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default FeatureCard;
