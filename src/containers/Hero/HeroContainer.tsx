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
                Stay up to date on the latest{" "}
                <span className="hero-wrapper-container__h1--underline">
                  crypto
                </span>{" "}
                prices
              </h1>
            </div>
            <div className="hero-wrapper-container__btns">
              <Button
                propFunc={scrollToTracker}
                text="Track Now!"
                primary={true}
              />
              <Button text="Learn More" primary={false} transparent={false} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;