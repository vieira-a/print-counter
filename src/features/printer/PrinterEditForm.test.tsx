import { render, screen } from "@testing-library/react";
import PrinterFormEdit from "./PrinterFormEdit";

describe("Should render PrinterFormEdit components", () => {
  beforeEach(() => {
    render(<PrinterFormEdit />);
  });

  it("Should render form title", () => {
    const formTitle = screen.getByText("Alteração de impressora");
    expect(formTitle).toBeInTheDocument();
  });
  it("Should render form subtitle", () => {
    const formSubtitle = screen.getByText(
      "Altere os campos com as informações necessárias para editar uma impressora cadastrada"
    );
    expect(formSubtitle).toBeInTheDocument();
  });
  it("Should render serial number label and input type", () => {
    const labelSerial = screen.getByLabelText("Número de série");
    const inputSerial = screen.getByPlaceholderText(
      "Informe o número de série"
    );
    expect(labelSerial).toBeInTheDocument();
    expect(inputSerial).toHaveAttribute("type", "text");
  });
  it("Should render brand label and input type", () => {
    const labelBrand = screen.getByLabelText("Fabricante");
    const inputBrand = screen.getByPlaceholderText("Informe o fabricante");
    expect(labelBrand).toBeInTheDocument();
    expect(inputBrand).toHaveAttribute("type", "text");
  });
  it("Should render model label and input type", () => {
    const labelModel = screen.getByLabelText("Modelo");
    const inputModel = screen.getByPlaceholderText("Informe o modelo");
    expect(labelModel).toBeInTheDocument();
    expect(inputModel).toHaveAttribute("type", "text");
  });
  it("Should render localization label and input type", () => {
    const labelLocal = screen.getByLabelText("Localização");
    const inputLocal = screen.getByPlaceholderText(
      "Informe o local de instalação"
    );
    expect(labelLocal).toBeInTheDocument();
    expect(inputLocal).toHaveAttribute("type", "text");
  });
  it("Should render counter label and input type", () => {
    const labelCounter = screen.getByLabelText("Contador atual");
    const inputCounter = screen.getByPlaceholderText(
      "Informe o contador atual"
    );
    expect(labelCounter).toBeInTheDocument();
    expect(inputCounter).toHaveAttribute("type", "number");
  });
});
// it("Should render cancel button", () => {
//   const buttons = screen.getAllByRole("button");
//   const buttonCancel = buttons.map(
//     (button) => (button.textContent = "Cancelar")
//   );

//   expect(buttonCancel).toBeInTheDocument();
// });
// it("Should render save button", () => {
//   const buttons = screen.getAllByRole("button");
//   const buttonSave = buttons.map((button) => (button.textContent = "Salvar"));
//   expect(buttonSave).toBeInTheDocument();
// });
