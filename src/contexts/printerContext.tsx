import { createContext } from "react";
import { IPrinter, IPrinterContext } from "@/common/interfaces/IPrinter";
import useActionNotification from "@/hooks/useActionNotification";
import useFilterPrinterBySerial from "@/hooks/useFilterPrinterBySerial";

const PrinterContext = createContext<IPrinterContext>({
  printer: {
    _id: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    printed: "",
    copied: "",
    counter: "",
  },
  setPrinter: (printer: IPrinter) => {
    console.log("Create printer", printer);
  },
  printers: [],
  setPrinters: (printers) => console.log(printers),
  printersBySerial: [],
  printersGrid: [],
  setPrintersGrid: (printersGrid) => console.log(printersGrid),
  printerEdit: {
    _id: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    printed: "",
    copied: "",
    counter: "",
  },
  setPrinterEdit: (printerEdit: IPrinter) => {
    console.log("Updated printer", printerEdit);
  },
  shouldUpdatePrinters: false,
  setShouldUpdatePrinters: () => {
    console.log("Updated");
  },
  searchSerial: "",
  setSearchSerial: () => {
    console.log("Search string");
  },
  actionNotification: { status: null, message: "" },
  showActionNotification: useActionNotification,
  printerBySerial: [],
  showPrinterBySerial: useFilterPrinterBySerial,
});
PrinterContext.displayName = "Printer";

export default PrinterContext;
