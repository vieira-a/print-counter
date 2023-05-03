import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PrinterForm from "./PrinterForm";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("Should render PrinterForm components and their types", () => {
  beforeEach(() => {
    render(<PrinterForm />);
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

describe("Check navigation button actions", () => {
  it("Cancel button should return do printer page", () => {
    render(<PrinterForm />);
    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);
    expect(mockNavigate).toHaveBeenCalled();
  });
  it("Close button should return do printer page", () => {
    render(<PrinterForm />);
    const closeButton = screen.getByLabelText("Fechar formulário");
    fireEvent.click(closeButton);
    expect(mockNavigate).toHaveBeenCalled();
  });
});

describe("PrinterForm fields validation message", () => {
  it("Should display an error message if serial number has less than 3 characters", async () => {
    render(<PrinterForm />);
    const inputSerialNumber = screen.getByPlaceholderText(
      "Informe o número de série"
    );
    userEvent.type(inputSerialNumber, "ab");
    const errorMessage = await waitFor(() =>
      screen.findByText("Este campo precisa ter no mínimo 3 caracteres")
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
