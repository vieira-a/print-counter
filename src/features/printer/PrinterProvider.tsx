import { useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";

export const PrinterProvider = ({ children }: IPrinterProvider) => {
  const [printer, setPrinter] = useState<IPrinter>({
    name: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: 0,
  });

  return (
    <PrinterContext.Provider value={{ printer, setPrinter }}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
