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
  setPrinters: (printers) => console.log(printers),
  printersBySerial: [],

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
  shouldUpdatePrinters: false,
  setShouldUpdatePrinters: () => {
    console.log("Updated");
  },
  deleteSelectedPrinter: () => {
    console.log("Deleted");
  },
  searchPrinterBySerial: () => {
    console.log("Found");
  },
  searchSerial: "",
  setSearchSerial: () => {
    console.log("Search string");
  },
});
PrinterContext.displayName = "Printer";

export default PrinterContext;
