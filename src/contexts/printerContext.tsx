import { createContext } from "react";
import { IPrinter, IPrinterContext } from "common/interfaces/IPrinter";
const PrinterContext = createContext<IPrinterContext>({
  printer: {
    _id: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: "",
  },
  setPrinter: (printer: IPrinter) => {
    console.log("Create printer", printer);
  },
  printerMessage: undefined,
  setPrinterMessage: (printerMessage) => console.log(printerMessage),
  printers: [],
  printerEdit: {
    _id: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: "",
  },
  setPrinterEdit: (printerEdit: IPrinter) => {
    console.log("Updated printer", printerEdit);
  },
  setPrinters: (printers) => console.log(printers),
  shouldUpdatePrinters: false,
  setShouldUpdatePrinters: () => {
    console.log("Updated");
  },
  deleteSelectedPrinter: () => {
    console.log("Deleted");
  },
});
PrinterContext.displayName = "Printer";

export default PrinterContext;
