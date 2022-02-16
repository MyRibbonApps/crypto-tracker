import SearchBar from "../../../Common/SearchBar";
import Information from "../Information";
import "./Tracker.scss";
import TrackerItem from "./TrackerItem";

const Tracker = ({ data }) => {
  return (
    <section className="tracker-section">
      <div className="tracker-section__textwrapper">
        <h1 className="tracker-section__textwrapper__h1">
          <span className="tracker-section__textwrapper__h1--underline">
            Cryptocurrency by <br className="hideDeskop"></br>
            <span className="tracker-section__textwrapper__h1--mobileunderline">
              Market Cap
            </span>
          </span>
        </h1>
      </div>
      <Information />
      <div className="tracker-section__searchbarwrapper">
        <SearchBar />
      </div>
      <div className="tracker-section__tracker">
        {/* <h1 style={{ color: "white" }}>Cateegories</h1> */}
        <section className="trackeritem-section trackeritem-section__info">
          <div className="trackeritem-section--coin-row">
            <div className="trackeritem-section--coin">
              <h1 className="trackeritem-section__h1">Name</h1>
              <h1 className="trackeritem-section__h1"></h1>
              <h1 className="trackeritem-section__h1"></h1>
            </div>
            <div className="trackeritem-section--coin-data">
              <p className="trackeritem-section__p">Price</p>
              <p className="trackeritem-section__p">24%</p>
            </div>
            <div className="trackeritem-section--coin-data">
              <p className="trackeritem-section__p">Markte cap</p>
              <p className="trackeritem-section__p">Volume</p>
            </div>
          </div>
        </section>
        {data ? (
          data.map((item) => {
            return (
              <div className="track">
                <TrackerItem key={item.id} data={item} />
              </div>
            );
          })
        ) : (
          <h1
            style={{ color: "white", textAlign: "center", marginTop: "2rem" }}
          >
            Oops, something went wrong try again...
          </h1>
        )}
      </div>
    </section>
  );
};

export default Tracker;
