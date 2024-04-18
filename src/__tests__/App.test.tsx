import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("App component renders correctly", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  expect(getByText("Todos")).toBeInTheDocument();
  expect(getByPlaceholderText("What needs to be done ?")).toBeInTheDocument();
});
