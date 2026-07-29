import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders initial loading state", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const loadingElement = screen.getByText("Loading...");
  expect(loadingElement).toBeInTheDocument();
});
