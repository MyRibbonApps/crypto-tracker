// Unit testing the search input component

import React, { useState } from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchInputComponent from "./SearchInputComponent";

const setInput = (e: any) => e;
test("Input getting focus on form click", () => {
  render(
    <SearchInputComponent
      searchInput=""
      setSearchInput={setInput}
      isSearching={false}
      inputReference={null}
    />
  );
  userEvent.click(screen.getByTestId("searchbarID"));
  expect(screen.getByTestId("searchbarInputID")).toHaveFocus();
});

test("Input box gets the value", () => {
  render(
    <SearchInputComponent
      searchInput="Something"
      setSearchInput={setInput}
      isSearching={true}
      inputReference={null}
    />
  );
  userEvent.type(screen.getByTestId("searchbarInputID"), "Bitcoin");
  expect(screen.getByTestId("searchbarInputID")).toHaveValue("Bitcoin");
});
