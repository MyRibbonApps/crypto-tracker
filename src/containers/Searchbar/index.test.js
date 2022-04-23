// Integration testing the full searchbar
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import SearchbarComponent from "./TESTFORTESTS/SearchBarComponent";
import SearchBarWrapper from "./SearchBarContainer";
import { postApiRequest } from "../../shared/api";

import { searchResultsData } from "../../../sharedTests/data";

// declare which API requests to mock
const server = setupServer(
  // capture "POST /searchCrypto requests
  rest.post("http://localhost:3001/searchCrypto", (req, res, ctx) => {
    // respond using a mocked JSON body
    console.log("Is called");
    return res(
      ctx.status(200).ctx.json({
        data: searchResultsData,
      })
    );
  })
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test("Input getting focus on form click", () => {
  render(
    <SearchbarComponent
      onResultClickHandler={() => console.log("1")}
      onSearchHandler={() => null}
    />
  );
  userEvent.click(screen.getByTestId("searchbarID"));
  expect(screen.getByTestId("searchbarInputID")).toHaveFocus();
});

test("Input box gets the value", () => {
  render(
    <SearchbarComponent
      onResultClickHandler={() => console.log("1")}
      onSearchHandler={() => null}
    />
  );
  userEvent.type(screen.getByTestId("searchbarInputID"), "Bitcoin");
  expect(screen.getByTestId("searchbarInputID")).toHaveValue("Bitcoin");
});

test("List of coins shows when you type the correct coin", async () => {
  render(
    <SearchbarComponent
    // onResultClickHandler={() => console.log("1")}
    // onSearchHandle={(controller, searchInput, searchResults) =>
    //   postApiRequest("http://localhost:3001/searchCrypto", {
    //     body: JSON.stringify("Bitcoin"),
    //   })
    // }
    />
  );
  // render(<SearchBarWrapper />);
  userEvent.type(screen.getByTestId("searchbarInputID"), "Bitcoin");
  const input = screen.getByTestId("searchbarInputID");
  fireEvent.change(input, { target: { value: "matti" } });
  // expect(screen.getByTestId("searchbarInputID")).toHaveValue("Bitcoin");
  // await waitFor(() => {
  //   // Asserts the result items is showing when the request has returned with the correct data
  expect(screen.getByTestId("searchResultItems")).toBeTruthy();
  // });
});
