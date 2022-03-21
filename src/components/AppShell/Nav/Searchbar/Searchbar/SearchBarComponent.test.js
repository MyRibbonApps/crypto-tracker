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

test("Input is valid, expect menu should open", () => {
  const onSearchHandler = jest.fn();
  render(
    <SearchbarComponent
      onResultClickHandler={() => console.log("1")}
      onSearchHandler={onSearchHandler}
      //   onSearchHandler={(input) => {
      //     if (input === "bitcoin") {
      //       return [1, 2, 3];
      //     } else {
      //       return null;
      //     }
      //   }}
    />
  );

  expect(onSearchHandler.mock.calls).toBeGreaterThan(0);

  // Get the input search bar
  // Add bitcoin as input
  // Expect a list

  //   expect(screen.getAllByTestId("searchbarID")).toHaveLength(1);
  //   screen.getAllByTestId("searchbarID");

  //   fireEvent.click(screen.getByTestId("searchbarID"));
  //   expect(screen.getByTestId("searchbarInputID")).toHaveFocus();
  //    fireEvent.click(screen.getByText("Load Greeting"));
});

// Input is valid, expect menu should open
