import { useState, useEffect, useRef, FC } from "react";

import ResultItemComponent from "./SearchResults/ResultItem/ResultItemComponent";
import SkeletonComponent from "./SearchResults/Skeleton/SkeletonComponent";
import SearchInputComponent from "./SearchInput/SearchInputComponent";
import SearchResultsComponent from "./SearchResults/SearchResultsComponent";

import "./SearchBarComponent.scss";
import { postApiRequest } from "../../../../../shared/api";

type Props = {
  onResultClickHandler: (id: string) => void;
  onSearchHandle: (
    controller: AbortController,
    searchInput: string,
    currentResults: any
  ) => Promise<any[] | null>;
};
const SearchbarComponent: FC<Props> = ({
  onResultClickHandler,
  onSearchHandle,
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

  const onSearchHandler = async (
    controller: AbortController = new AbortController(),
    searchInput: string,
    currentResults: any
  ) => {
    const body = {
      searchInput,
    };
    try {
      const res = await postApiRequest("http://localhost:3001/searchCrypto", {
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      return res;

      //
    } catch (e: any) {
      console.dir(e);
      if (e && e.message && e.message === "The user aborted a request.") {
        console.log("EHHHHH");
        return currentResults;
      }
      return null;
    }
  };
  const inputReference = useRef<any>();

  const outsideClickSearchBox = (e: any) => {
    // Close the search box if we are clicking outside of it
    if (!e.target.className.includes("searchbar")) {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    // onSearchHandler(new AbortController(), searchInput, searchResults);
    if (searchInput.trim() === "") {
      // If the input is empty we don't show the searchBox it anymore
      resetSearchBar();
      return;
    }
    if (!isSearching) setShowSkeleton(true);

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
        console.log(inputReference);
      }}
    >
      {/* INPUT START */}
      {/* <span
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
      </span> */}
      <SearchInputComponent />
      {/* INPUT END*/}

      {/* SEARCHRESULT START */}
      {isSearching && searchInput !== "" ? (
        <SearchResultsComponent />
      ) : // <div
      //   className="searchbar-searchresults"
      //   data-testid="searchResultItems"
      // >
      //   {/* If searching, show skeleton */}
      //   {showSearchSkeleton ? (
      //     <span>
      //       {Array.apply(null, Array(3)).map((item, index) => {
      //         return (
      //           <div key={index}>
      //             <SkeletonComponent />
      //           </div>
      //         );
      //       })}
      //       <br />
      //     </span>
      //   ) : // If error show error
      //   showSearchError ? (
      //     <span className="searchbar-searchresults-resultwrapper-noresults">
      //       <h1 className="searchbar-searchresults-resultwrapper-noresults__h1">
      //         Opps
      //       </h1>
      //       <p className="searchbar-searchresults-resultwrapper-noresults__p">
      //         Something went wrong.. Try again or wait a few minutes.
      //       </p>
      //     </span>
      //   ) : // If results is more than 0, show results
      //   searchResults?.length > 0 ? (
      //     searchResults.map((coin) => {
      //       return (
      //         <div
      //           onClick={() => {
      //             resetSearchBar();
      //             onResultClickHandler(coin.id);
      //           }}
      //           key={coin.id}
      //           className="searchbar-searchresults-resultwrapper"
      //         >
      //           <ResultItemComponent coin={coin} />
      //         </div>
      //       );
      //     })
      //   ) : // If results is 0, show no results
      //   searchResults?.length === 0 ? (
      //     <span className="searchbar-searchresults-resultwrapper-noresults">
      //       <h1 className="searchbar-searchresults-resultwrapper-noresults__h1">
      //         No results
      //       </h1>
      //       <p className="searchbar-searchresults-resultwrapper-noresults__p">
      //         We couldn't find anything matching your search. Try again with a
      //         different term.
      //       </p>
      //     </span>
      //   ) : null}
      // </div>
      null}
      {/* SEARCHRESULT END */}
    </span>
  );
};

export default SearchbarComponent;
