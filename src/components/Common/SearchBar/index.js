import { useEffect, useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ searchResults }) => {
  const [input, setInput] = useState("");
  const search = () => {
    console.log(input);
    return input;
  };

  useEffect(() => {
    if (input !== "") {
      const optimisation = setTimeout(async () => {
        try {
          const data = await fetch(`url/${search()}`);
          const results = await data?.json();
          searchResults(results);
        } catch (e) {
          searchResults([]);
          console.log(e);
        }
      }, 1000);
      return function () {
        clearTimeout(optimisation);
      };
    } else {
      searchResults(null);
    }
  }, [input]);

  return (
    <section className="searchBar-section">
      <input
        className="searchBar-section__input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? search() : null)}
        placeholder="Search for coin.."
      ></input>
    </section>
  );
};

export default SearchBar;
