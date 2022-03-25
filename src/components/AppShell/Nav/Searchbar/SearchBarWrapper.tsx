import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { postApiRequest } from "../../../../shared/api";

import SearchInputComponent from "./SearchInput/SearchInputComponent";
import SearchResultsComponent from "./SearchResults/SearchResultsComponent";

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
      return currentResults;
    }
    return null;
  }
};

const SearchBar: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [showSearchError, setSearchError] = useState<boolean>(false);
  const [showSearchSkeleton, setShowSkeleton] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const inputReference = useRef<HTMLInputElement | any>(null);
  // const navigate = useNavigate();

  const resetSearchBar = () => {
    setSearchInput("");
    setSearchError(false);
    setSearchInput("");
    setIsSearching(false);
    setShowSkeleton(false);
    setSearchResults([]);
  };

  const onResultClickHandler = (id: string) => {
    resetSearchBar();
    console.log(id);
    // navigate(`/currencies/${id}`);
  };

  const outsideClickSearchBox = (e: any) => {
    // Close the search box if we are clicking outside of it
    if (!e.target.className.includes("searchbar")) {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    // If the input is empty we don't show the searchBox it anymore
    if (searchInput.trim() === "") {
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
      setSearchResults([]);
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
  //   useEffect(() => {
  //     onSearchHandler(new AbortController(), "Bitcoin", []);
  //   }, []);

  return (
    <span
      data-testid="searchbarID"
      className="searchbar"
      onClick={() => {
        inputReference.current.focus();
        console.log(inputReference);
      }}
    >
      {/* SEARCH INPUT START */}
      <SearchInputComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isSearching={isSearching}
        inputReference={inputReference}
      />
      {/* SEARCHRESULT START */}
      {isSearching && searchInput !== "" ? (
        <SearchResultsComponent
          showSearchSkeleton={showSearchSkeleton}
          showSearchError={showSearchError}
          searchResults={searchResults}
          onResultClickHandler={onResultClickHandler}
        />
      ) : null}
    </span>
  );
};
export default SearchBar;
