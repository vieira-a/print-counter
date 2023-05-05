import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
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
  beforeEach(() => {
    render(<PrinterForm />);
  });

  it("Should display an error message if serial has less than 3 characters", async () => {
    const inputSerialNumber = screen.getByPlaceholderText(
      "Informe o número de série"
    );
    userEvent.type(inputSerialNumber, "ab");
    const errorMessage = await screen.findByTestId("error-serial");

    expect(errorMessage).toBeInTheDocument();
  });

  // it("Should display an error message if counter less than 0", async () => {
  //   const inputCounter = screen.getByPlaceholderText(
  //     "Informe o contador atual"
  //   );
  //   const counterValue = -1;
  //   userEvent.type(inputCounter, counterValue.toString());
  //   const errorMessage = await waitFor(() =>
  //     screen.findByText("O valor do contador precisa ser maior ou igual a 0")
  //   );
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
