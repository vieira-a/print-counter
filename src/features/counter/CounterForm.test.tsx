import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterForm from "./CounterForm";
import { CounterProvider } from "../../features/counter/CounterProvider";
import CounterContext from "../../contexts/counterContext";

jest.mock("../../services/servicePrinter", () => ({
  getPrinters: jest.fn().mockResolvedValue([
    [
      {
        id: "1",
        serial: "VR895630",
      },
      {
        id: "2",
        serial: "XVN41589",
      },
    ],
  ]),
}));

describe("Render CounterForm components", () => {
  it("Should render CounterForm component", () => {
    render(<CounterForm />);
    const formElement = screen.getByTestId("form-counter");
    expect(formElement).toBeInTheDocument();
  });

  it("Should render input type select to load printer informations", () => {
    render(<CounterForm />);
    const selectPrinter = screen.getByRole("combobox");
    expect(selectPrinter).toBeInTheDocument();
  });

  it("Should render input disabled to show current printer counter", () => {
    render(<CounterForm />);
    const printerCounter = screen.getByTestId("printer-counter");
    expect(printerCounter).toBeInTheDocument();
    expect(printerCounter).toHaveAttribute("disabled");
  });

  it("Should render input to fill the amount of copies", () => {
    render(<CounterForm />);
    const inputCopied = screen.getByTestId("counter-copied");
    expect(inputCopied).toBeInTheDocument();
    expect(inputCopied).toHaveAttribute("type", "number");
  });

  it("Should render input to fill amount of printed pages", () => {
    render(<CounterForm />);
    const inputPrinterPages = screen.getByTestId("counter-printed");
    expect(inputPrinterPages).toBeInTheDocument();
    expect(inputPrinterPages).toHaveAttribute("type", "number");
  });

  it("Should render submit counter button", () => {
    render(<CounterForm />);
    const submitCounterButton = screen.getByRole("button", { name: "Salvar" });
    expect(submitCounterButton).toBeInTheDocument();
    expect(submitCounterButton).toHaveAttribute("type", "submit");
  });

  it("Should render cancel button", () => {
    render(<CounterForm />);
    const cancelButton = screen.getByRole("button", { name: "Cancelar" });
    expect(cancelButton).toBeInTheDocument();
    expect(cancelButton).toHaveAttribute("type", "reset");
  });

  it("Should render form element", async () => {
    await act(async () => {
      render(<CounterForm />);
    });

    await waitFor(() => {
      const formElement = screen.getByTestId("form-counter");
      expect(formElement).toBeInTheDocument();
    });
  });

  it("Should load printers on the select options", async () => {
    const mockPrinters = [
      {
        _id: "646820a75a107cced50defb3",
        model: "M2040",
        brand: "KYOCERA",
        serial: "VR97308892",
        local: "1 ANDAR",
      },
      {
        _id: "646826a319395471844c0fb4",
        model: "M2040",
        brand: "KYOCERA",
        serial: "VR97310528",
        local: "TERREO",
      },
    ];

    render(<CounterForm />);

    const select = screen.getByLabelText("Selecione uma impressora");
    expect(select).toBeInTheDocument();

    userEvent.click(select);

    mockPrinters.forEach(async (printer) => {
      await waitFor(() => {
        const option = screen.getAllByRole("option");
        expect(option).toBeInTheDocument();
        const serial = screen.queryByText(printer.serial);
        expect(serial).toBeInTheDocument();
      });
    });
  });
});
