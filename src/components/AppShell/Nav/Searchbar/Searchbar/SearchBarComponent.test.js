import SearchbarComponent from "./SearchBarComponent";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(
    <SearchbarComponent
      onResultClickHandler={() => console.log("1")}
      onSearchHandler={() => console.log(2)}
    />
  );
  expect(screen.getAllByTestId("searchbarID")).toHaveLength(1);
  screen.getAllByTestId("searchbarID");

  fireEvent.click(screen.getByTestId("searchbarID"));
  expect(screen.getByTestId("searchbarInputID")).toHaveFocus();
  //    fireEvent.click(screen.getByText("Load Greeting"));
});
