import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Printer from "./Printer";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

describe("Should render Printer.tsx components", () => {
  beforeEach(() => {
    render(
      <Router location={history.location} navigator={history}>
        <Printer />
      </Router>
    );
  });

  it("Should render input search component", () => {
    const inputSearch = screen.getByPlaceholderText(/Buscar uma impressora/i);

    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toHaveAttribute("type", "search");
  });
});
