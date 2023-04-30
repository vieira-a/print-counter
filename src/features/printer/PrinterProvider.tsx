import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";
import createPrinter from "../../services/servicePrinter";

export const PrinterProvider = ({ children }: IPrinterProvider) => {
  const [printer, setPrinter] = useState<IPrinter>({
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: "",
  });

  const [printerMessage, setPrinterMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (Object.values(printer).every((value) => !!value)) {
      createPrinter(printer, setPrinterMessage);
    }
  }, [printer, setPrinterMessage]);

  const printerContextValue = {
    printer,
    setPrinter,
    printerMessage,
    setPrinterMessage,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
