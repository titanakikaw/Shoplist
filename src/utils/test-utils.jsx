import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configStore from "../configStore";

// As a basic setup, import your same slice reducers

export default function renderWithProviders(ui) {
  const store = configStore();
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper }) };
}
