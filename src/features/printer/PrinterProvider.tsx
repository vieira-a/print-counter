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

  const [shouldUpdatePrinters, setShouldUpdatePrinters] = useState(false);

  useEffect(() => {
    if (shouldUpdatePrinters) {
      getPrinters().then((data) => {
        setPrinters(data);
      });
    }
  }, [shouldUpdatePrinters]);

  useEffect(() => {
    if (Object.values(printer).every((value) => !!value)) {
      createPrinter(printer, setPrinterMessage);
      setPrinterMessage("success");
      setShouldUpdatePrinters(true);
    }

    getPrinters().then((data) => {
      setPrinters(data);
    });
  }, [printer, setPrinterMessage, setShouldUpdatePrinters]);

  const printerContextValue = {
    printer,
    setPrinter,
    printers,
    setPrinters,
    getPrinters,
    shouldUpdatePrinters,
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