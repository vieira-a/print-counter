import { render, screen } from "@testing-library/react";
import CounterForm from "./CounterForm";
import Select from "../../components/Select";

describe("Render CounterForm components", () => {
  beforeEach(() => {
    render(<CounterForm />);
  });
  it("Should render CounterForm component", () => {
    expect(render(<CounterForm />));
  });

  it("Should render input type select to load printer informations", () => {
    render(<Select />);
    const selectPrinter = screen.getByRole("combobox");
    expect(selectPrinter).toBeInTheDocument();
  });
});
