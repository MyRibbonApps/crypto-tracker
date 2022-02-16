import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const search = () => {
    console.log(input);
  };
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
