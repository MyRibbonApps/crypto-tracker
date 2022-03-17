import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import searchIcon from "../../../../src/search.png";

const SearchResultItem = ({ coin }) => {
  return (
    <>
      <span className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent">
        <img
          className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent__img"
          src={coin.thumb}
        ></img>
        <h3 className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent__name">
          {coin.name}
        </h3>
        <p className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent__symbol">
          {coin.symbol}
        </p>
      </span>
      <span className="nav-ul-inputwrapper-searchresults-resultwrapper-rightcontent">
        <p className="nav-ul-inputwrapper-searchresults-resultwrapper-rightcontent__cap">
          #{coin.market_cap_rank}
        </p>
      </span>
    </>
  );
};

const SearchSkeleton = () => {
  return (
    <>
      <div className="nav-ul-inputwrapper-searchresults-resultwrapper">
        <span className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent">
          <span className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent__img--skeleton"></span>
          <span className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent__name--skeleton"></span>
          <span className="nav-ul-inputwrapper-searchresults-resultwrapper-leftcontent__symbol--skeleton"></span>
        </span>
        <span className="nav-ul-inputwrapper-searchresults-resultwrapper-rightcontent">
          <p className="nav-ul-inputwrapper-searchresults-resultwrapper-rightcontent__cap--skeleton"></p>
        </span>
      </div>
    </>
  );
};

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showSearchError, setSearchError] = useState(false);
  const [showSearchSkeleton, setShowSkeleton] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const inputReference = useRef();

  const resetSearchBar = () => {
    setSearchInput("");
    setSearchError(false);
    setSearchInput("");
    setIsSearching(false);
    setShowSkeleton(false);
    setSearchResults(null);
  };

  const generateSkeleton = () => {
    // Creates an skeleton to show
    return Array.apply(null, Array(3)).map((item, index) => {
      return (
        <div key={index}>
          <SearchSkeleton />
        </div>
      );
    });
  };

  const searchForCoin = async (controller = new AbortController()) => {
    const body = {
      searchInput: searchInput,
    };
    try {
      const makeSearchRequest = await fetch(
        "http://localhost:3001/searchCrypto",

        {
          signal: controller.signal,
          method: "POST",

          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const toJsn = await makeSearchRequest?.json();
      console.log(toJsn.data);
      if (toJsn.data) {
        return toJsn.data;
      }
      return null;
    } catch (e) {
      console.dir(e);
      if (e && e.message && e.message === "The user aborted a request.") {
        console.log("EHHHHH");
        return searchResults;
      } else {
        return null;
      }
    }
  };

  const outsideClickSearchBox = (e) => {
    // Close the search box if we are clicking outside of it
    if (!e.target.className.includes("nav-ul-inputwrapper")) {
      setIsSearching(false);
    }
  };
  useEffect(() => {
    if (!isSearching) {
      //   setShowSkeleton(true);
    }
    if (searchInput.trim() !== "") {
      setIsSearching(true);
      setSearchError(false);
      // Creating a new abortcontroller for cancel the fetch request if we start typying again
      const controller = new AbortController();

      // We only make a request after the user have stopped typing for 0.5 seconds
      const optimise = setTimeout(async () => {
        setShowSkeleton(true);
        const search = await searchForCoin(controller);

        if (search) {
          setSearchError(false);
          setSearchResults(search);
          setShowSkeleton(false);
          return;
        }

        setSearchError(true);
        setSearchResults(null);
        setShowSkeleton(false);
      }, 200);

      return function () {
        clearTimeout(optimise);
        controller.abort();
      };
    }

    // If the input is empty we don't show the searchBox it anymore
    resetSearchBar();
  }, [searchInput]);

  useEffect(() => {
    document.addEventListener("click", outsideClickSearchBox);
  }, []);

  const navigateToCoin = (id) => {
    console.log(id);
    navigate(`/currencies/${id}`);
  };
  return (
    <span
      className="nav-ul-inputwrapper"
      onClick={() => {
        inputReference.current.focus();
        setIsSearching(true);
      }}
    >
      <span
        className={
          isSearching
            ? "nav-ul-inputwrapper-inputcontainer nav-ul-inputwrapper-inputcontainer--active"
            : "nav-ul-inputwrapper-inputcontainer"
        }
      >
        <img
          src={searchIcon}
          className="nav-ul-inputwrapper-inputcontainer__icon"
        ></img>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchForCoin();
          }}
          className="nav-ul-inputwrapper__form"
        >
          <input
            ref={inputReference}
            onClick={() => {
              setIsSearching(true);
            }}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            className="nav-ul-inputwrapper__input"
            placeholder="Search for crypto asset..."
          ></input>
        </form>
      </span>
      {isSearching && searchInput !== "" ? (
        <div className="nav-ul-inputwrapper-searchresults">
          {showSearchSkeleton ? (
            //   NOT THIS ONE
            <span>
              {generateSkeleton()}
              <br />
            </span>
          ) : showSearchError ? (
            <span className="nav-ul-inputwrapper-searchresults-resultwrapper-noresults">
              <h1 className="nav-ul-inputwrapper-searchresults-resultwrapper-noresults__h1">
                Opps
              </h1>
              <p className="nav-ul-inputwrapper-searchresults-resultwrapper-noresults__p">
                Something went wrong.. Try again or wait a few minutes.
              </p>
            </span>
          ) : searchResults?.length > 0 ? (
            //   NOT THIS ONE
            searchResults.map((coin) => {
              return (
                <div
                  onClick={() => navigateToCoin(coin.id)}
                  key={coin.id}
                  className="nav-ul-inputwrapper-searchresults-resultwrapper"
                >
                  <SearchResultItem coin={coin} />
                </div>
              );
            })
          ) : searchResults ? (
            <span className="nav-ul-inputwrapper-searchresults-resultwrapper-noresults">
              <h1 className="nav-ul-inputwrapper-searchresults-resultwrapper-noresults__h1">
                No results
              </h1>
              <p className="nav-ul-inputwrapper-searchresults-resultwrapper-noresults__p">
                We couldn't find anything matching your search. Try again with a
                different term.
              </p>
            </span>
          ) : null}
        </div>
      ) : // NOT THIS ONE
      null}
    </span>
  );
};
export default SearchBar;
