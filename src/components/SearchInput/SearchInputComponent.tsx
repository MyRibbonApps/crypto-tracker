import { Dispatch, FC, RefObject, SetStateAction, useRef } from "react";
import searchIcon from "../../../src/search.png";

import "./SearchInputComponent.scss";

type SearchInputComponentProps = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  isSearching: boolean;
  inputReference: RefObject<HTMLElement> | any;
};

const SearchInputComponent: FC<SearchInputComponentProps> = ({
  searchInput,
  setSearchInput,
  isSearching,
  inputReference,
}) => {
  return (
    <span
      onClick={() => inputReference.current.focus()}
      className={
        isSearching
          ? "searchbar-inputcontainer searchbar-inputcontainer--active"
          : "searchbar-inputcontainer"
      }
    >
      <img src={searchIcon} className="searchbar-inputcontainer__icon"></img>
      <form onSubmit={(e) => e.preventDefault()} className="searchbar__form">
        <input
          data-testid="searchbarInputID"
          ref={inputReference}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="searchbar__input"
          placeholder="Search for crypto asset..."
        ></input>
      </form>
    </span>
  );
};

export default SearchInputComponent;
