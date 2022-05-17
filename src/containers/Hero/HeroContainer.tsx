import { FC } from "react";
import Button from "../../components/Button/index";
import "./Hero.scss";
type Props = {
  scrollToTracker: () => void;
};
const Hero: FC<Props> = ({ scrollToTracker }) => {
  return (
    <>
      {/* <Nav propFunc={scrollToTracker} /> */}
      <main className="hero">
        <div className="hero-bg"></div>
        <div className="hero-wrapper">
          <section className="hero-wrapper-container">
            <div className="hero-wrapper-container__textwrapper">
              <h1 className="hero-wrapper-container__h1">
                NFT Cinema Tickets
                {/* <span className="hero-wrapper-container__h1--underline">
                  crypto
                </span>{" "}
                prices */}
              </h1>
              <p className="hero-wrapper-container__p">
                Own your tickets on the blockchain.
              </p>
            </div>
            <div className="hero-wrapper-container__btns">
              <Button mode="filled" theme="dark" onClick={scrollToTracker}>
                Find movies
              </Button>

              <Button mode="filled" theme="light">
                Learn More
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
