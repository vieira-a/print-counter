import { Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Printer from "./Printer";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const history = createMemoryHistory();

describe("Should render Printer.tsx components", () => {
  beforeEach(() => {
    render(
      <Router location={history.location} navigator={history}>
        <Printer />
      </Router>
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render input search component", () => {
    const inputSearch = screen.getByPlaceholderText(
      /Digite o número de série para buscar uma impressora/i
    );

    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toHaveAttribute("type", "search");
  });

  it("Should render a button for insert a new printer", () => {
    const buttonInsertNewPrinter = screen.getByRole("button", {
      name: "Adicionar",
    });
    expect(buttonInsertNewPrinter).toBeInTheDocument();
  });

  it("Should go to create a new printer on insert button click", async () => {
    const buttonInsertNewPrinter = screen.getByRole("button", {
      name: "Adicionar",
    });

    await act(async () => {
      fireEvent.click(buttonInsertNewPrinter);
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/printer/create");
  });
});
