import "./Information.scss";
const Information = () => {
  return (
    <section className="information-flex">
      <div className="information-flex__item">
        <h1 className="information-flex__item__h1">Last prices</h1>
        <p className="information-flex__item__p">
          Browse or search your favorite coins! Get instant information about
          any coin you can think of!
        </p>
      </div>
      <div className="information-flex__item">
        <h1 className="information-flex__item__h1">Trending Coins</h1>
        <p className="information-flex__item__p">
          We will soon have a sectiion for the most trending coins and nts, so
          saty tuned for that! It will be a really cool feature!
        </p>
      </div>
      <div className="information-flex__item">
        <h1 className="information-flex__item__h1">100% Free</h1>
        <p className="information-flex__item__p">
          And yes.. It is free, crypto tracker will always have a free version,
          we think that to be able to look up any price and get the best data is
          the key!
        </p>
      </div>
    </section>
  );
};

export default Information;
