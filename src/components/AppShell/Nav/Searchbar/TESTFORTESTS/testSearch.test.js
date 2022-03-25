import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import TestSearch from "./testSearch";
import { handlers, rest } from "../../../../../../sharedTests/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("Input change, soould trigger request", async () => {
  render(<TestSearch />);
  userEvent.type(screen.getByTestId("searchbarInputID"), "Something");
  const val = screen.getByTestId("searchbarInputID");
  await waitFor(() => {
    expect(screen.getByTestId("textID")).toHaveTextContent("Hey");
  });
});
