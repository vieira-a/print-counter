import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PrinterForm from "./PrinterForm";

describe("Should render PrinterForm components and their types", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <PrinterForm />
      </MemoryRouter>
    );
  });

  it("Should render serial number input, type: text", () => {
    const inputSerialNumber = screen.getByPlaceholderText(
      "Informe o número de série"
    );
    expect(inputSerialNumber).toBeInTheDocument();
    expect(inputSerialNumber).toHaveAttribute("type", "text");
  });
  it("Should render brand input, type: text", () => {
    const inputBrand = screen.getByPlaceholderText("Informe o fabricante");
    expect(inputBrand).toBeInTheDocument();
    expect(inputBrand).toHaveAttribute("type", "text");
  });
  it("Should render model input, type: text", () => {
    const inputModel = screen.getByPlaceholderText("Informe o modelo");
    expect(inputModel).toBeInTheDocument();
    expect(inputModel).toHaveAttribute("type", "text");
  });
  it("Should render localization input, type: text", () => {
    const inputLocal = screen.getByPlaceholderText(
      "Informe o local de instalação"
    );
    expect(inputLocal).toBeInTheDocument();
    expect(inputLocal).toHaveAttribute("type", "text");
  });
  it("Should render counter input, type: number", () => {
    const inputCounter = screen.getByPlaceholderText(
      "Informe o contador atual"
    );
    expect(inputCounter).toBeInTheDocument();
    expect(inputCounter).toHaveAttribute("type", "number");
  });
  it("Should render submit button, type: submit", () => {
    const submitButton = screen.getByRole("button", { name: "Salvar" });
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeInTheDocument();
  });
  it("Should render cancel button, type: reset", () => {
    const cancelButton = screen.getByRole("button", { name: "Cancelar" });
    expect(cancelButton).toHaveAttribute("type", "reset");
  });
});
