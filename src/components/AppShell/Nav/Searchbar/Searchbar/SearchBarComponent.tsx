import { useState, useEffect, useRef, FC } from "react";

import ResultItemComponent from "./ResultItem/ResultItemComponent";
import SkeletonComponent from "./Skeleton/SkeletonComponent";

import searchIcon from "../../../../../../src/search.png";
import "./SearchBarComponent.scss";

type Props = {
  onResultClickHandler: (id: string) => void;
  onSearchHandler: (
    controller: AbortController,
    searchInput: string,
    currentResults: any
  ) => Promise<any[] | null>;
};
const SearchbarComponent: FC<Props> = ({
  onResultClickHandler,
  onSearchHandler,
}) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [showSearchError, setSearchError] = useState<boolean>(false);
  const [showSearchSkeleton, setShowSkeleton] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const resetSearchBar = () => {
    setSearchInput("");
    setSearchError(false);
    setSearchInput("");
    setIsSearching(false);
    setShowSkeleton(false);
    setSearchResults([]);
  };

  const inputReference = useRef<any>();

  const outsideClickSearchBox = (e: any) => {
    // Close the search box if we are clicking outside of it
    if (!e.target.className.includes("searchbar")) {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (searchInput.trim() === "") {
      // If the input is empty we don't show the searchBox it anymore
      resetSearchBar();
      return;
    }

    setIsSearching(true);
    setSearchError(false);

    // Creating a new abortcontroller for cancel the fetch request if we start typying again
    const controller = new AbortController();

    // We only make a request after the user have stopped typing for 0.5 seconds
    const optimise = setTimeout(async () => {
      setShowSkeleton(true);
      const search = await onSearchHandler(
        controller,
        searchInput,
        searchResults
      );

      if (search) {
        setSearchError(false);
        setSearchResults(search);
        setShowSkeleton(false);
        return;
      }

      setSearchError(true);
      setSearchResults(searchResults);
      setShowSkeleton(false);
    }, 200);

    return function () {
      clearTimeout(optimise);
      controller.abort();
    };
  }, [searchInput]);

  useEffect(() => {
    document.addEventListener("click", outsideClickSearchBox);
  }, []);

  return (
    <span
      data-testid="searchbarID"
      className="searchbar"
      onClick={() => {
        inputReference.current.focus();
      }}
    >
      {/* INPUT START */}
      <span
        onClick={() => setIsSearching(true)}
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
      {/* INPUT END*/}

      {/* SEARCHRESULT START */}
      {isSearching && searchInput !== "" ? (
        <div className="searchbar-searchresults">
          {/* If searching, show skeleton */}
          {showSearchSkeleton ? (
            <span>
              {Array.apply(null, Array(3)).map((item, index) => {
                return (
                  <div key={index}>
                    <SkeletonComponent />
                  </div>
                );
              })}
              <br />
            </span>
          ) : // If error show error
          showSearchError ? (
            <span className="searchbar-searchresults-resultwrapper-noresults">
              <h1 className="searchbar-searchresults-resultwrapper-noresults__h1">
                Opps
              </h1>
              <p className="searchbar-searchresults-resultwrapper-noresults__p">
                Something went wrong.. Try again or wait a few minutes.
              </p>
            </span>
          ) : // If results is more than 0, show results
          searchResults?.length > 0 ? (
            searchResults.map((coin) => {
              return (
                <div
                  onClick={() => {
                    resetSearchBar();
                    onResultClickHandler(coin.id);
                  }}
                  key={coin.id}
                  className="searchbar-searchresults-resultwrapper"
                >
                  <ResultItemComponent coin={coin} />
                </div>
              );
            })
          ) : // If results is 0, show no results
          searchResults?.length === 0 ? (
            <span className="searchbar-searchresults-resultwrapper-noresults">
              <h1 className="searchbar-searchresults-resultwrapper-noresults__h1">
                No results
              </h1>
              <p className="searchbar-searchresults-resultwrapper-noresults__p">
                We couldn't find anything matching your search. Try again with a
                different term.
              </p>
            </span>
          ) : null}
        </div>
      ) : null}
      {/* SEARCHRESULT END */}
    </span>
  );
};

export default SearchbarComponent;
