import { FC } from "react";

import ResultItemComponent from "./ResultItem/ResultItemComponent";
import SkeletonComponent from "./Skeleton/SkeletonComponent";

import "./SearchResultsComponent.scss";

type SearchResultsComponent = {
  showSearchSkeleton: boolean;
  showSearchError: boolean;
  searchResults: any;
  onResultClickHandler: (id: string) => void;
};

const SearchResultsComponent: FC<SearchResultsComponent> = ({
  showSearchSkeleton,
  showSearchError,
  searchResults,
  onResultClickHandler,
}) => {
  return (
    <div className="searchbar-searchresults" data-testid="searchResultItems">
      {/* If searching and the request has not returned yet, show skeleton */}
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
        searchResults.map((coin: any) => {
          return (
            <div
              onClick={() => {
                onResultClickHandler(coin.id);
              }}
              //   onClick={() => {
              //     resetSearchBar();
              //     onResultClickHandler(coin.id);
              //   }}
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
  );
};

export default SearchResultsComponent;
