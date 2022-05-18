import MovieCard from "../../components/MovieCard";
import "./styles.scss";
const Movies = () => {
  const movies = new Array(8).fill(0).map((movie) => <MovieCard />);
  return (
    <section className="movies">
      <h2 className="movies-title">Big Premiers 🔥</h2>
      <div className="movies-cardcontainer">{movies}</div>
    </section>
  );
};

export default Movies;
