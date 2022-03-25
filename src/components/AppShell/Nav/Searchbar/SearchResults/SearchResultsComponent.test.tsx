// Unit testing the search result chunk
import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";

import { searchResultsData } from "../../../../../../sharedTests/data";

import SearchResultsComponent from "./SearchResultsComponent";

test("A list of items should be rendered when data is passed in", () => {
  render(
    <SearchResultsComponent
      showSearchSkeleton={false}
      showSearchError={false}
      searchResults={searchResultsData}
      onResultClickHandler={(id: string) => console.log(id)}
    />
  );
  expect(screen.getByText("Bitcoin")).toBeTruthy();
});

test("A skeleton loading state should show", () => {
  render(
    <SearchResultsComponent
      showSearchSkeleton={true}
      showSearchError={false}
      searchResults={[]}
      onResultClickHandler={(id: string) => console.log(id)}
    />
  );
  expect(screen.getByTestId("skeletonID")).toBeTruthy();
});

test("A text saying no results was found should show", () => {
  render(
    <SearchResultsComponent
      showSearchSkeleton={false}
      showSearchError={false}
      searchResults={[]}
      onResultClickHandler={(id: string) => console.log(id)}
    />
  );
  expect(screen.getByText("No results")).toBeInTheDocument();
});

test("A text saying there is an error", () => {
  render(
    <SearchResultsComponent
      showSearchSkeleton={false}
      showSearchError={true}
      searchResults={[]}
      onResultClickHandler={(id: string) => console.log(id)}
    />
  );
  expect(
    screen.getByText("Something went wrong.. Try again or wait a few minutes.")
  ).toBeInTheDocument();
});
