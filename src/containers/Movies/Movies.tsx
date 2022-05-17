import FeatureCard from "../../components/FeatureCard";
import "./styles.scss";
const Movies = () => {
  return (
    <section className="movies">
      <h2 className="movies-title">Big Premiers</h2>

      <div className="movies-cardcontainer">
        <FeatureCard title="oihn" />
        <FeatureCard title="oihn" />
        <FeatureCard title="oihn" />
      </div>
    </section>
  );
};

export default Movies;
