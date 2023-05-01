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
    console.log("Update printer", printer);
  },
  printerMessage: undefined,
  setPrinterMessage: (printerMessage) => console.log(printerMessage),
  printers: [],
  setPrinters: (printers) => console.log(printers),
  shouldUpdatePrinters: false,
});
PrinterContext.displayName = "Printer";

export default PrinterContext;
