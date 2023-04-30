import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";
import { createPrinter, getPrinters } from "../../services/servicePrinter";

export const PrinterProvider = ({ children }: IPrinterProvider) => {
  const [printer, setPrinter] = useState<IPrinter>({
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: "",
  });

  const [printers, setPrinters] = useState<IPrinter[]>([]);

  const [printerMessage, setPrinterMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (Object.values(printer).every((value) => !!value)) {
      createPrinter(printer, setPrinterMessage);
    }
  }, [printer, setPrinterMessage]);

  useEffect(() => {
    const loadPrinters = async () => {
      const data = await getPrinters();
      setPrinters(data);
    };
    loadPrinters();
  }, []);

  const printerContextValue = {
    printer,
    setPrinter,
    printers,
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
