import { createContext } from "react";
import { IPrinter, IPrinterContext } from "common/interfaces/IPrinter";
const PrinterContext = createContext<IPrinterContext>({
  printer: {
    name: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: 0,
  },
  setPrinter: (printer: IPrinter) => {
    console.log("Update printer", printer);
  },
});
PrinterContext.displayName = "Printer";

export default PrinterContext;
