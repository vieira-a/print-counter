import { render, screen } from "@testing-library/react";
import CounterForm from "./CounterForm";

describe("Render CounterForm components", () => {
  beforeEach(() => {
    render(<CounterForm />);
  });
  it("Should render CounterForm component", () => {
    expect(render(<CounterForm />));
  });

  it("Should render input type select to load printer informations", () => {
    const selectPrinter = screen.getByRole("combobox");
    expect(selectPrinter).toBeInTheDocument();
  });

  it("Should render input disabled to show current printer counter", () => {
    const printerCounter = screen.getByTestId("printer-counter");
    expect(printerCounter).toBeInTheDocument();
    expect(printerCounter).toHaveAttribute("disabled");
  });

  it("Should render input to fill the amount of copies", () => {
    const inputCopied = screen.getByTestId("counter-copied");
    expect(inputCopied).toBeInTheDocument();
    expect(inputCopied).toHaveAttribute("type", "number");
  });

  it("Should render input to fill amount of printed pages", () => {
    const inputPrinterPages = screen.getByTestId("counter-printed");
    expect(inputPrinterPages).toBeInTheDocument();
    expect(inputPrinterPages).toHaveAttribute("type", "number");
  });
});
