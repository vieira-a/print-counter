import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";
import printerService from "../../services/printerService";

export const PrinterProvider = ({ children }: IPrinterProvider) => {
  const [printer, setPrinter] = useState<IPrinter>({
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: "",
  });

  useEffect(() => {
    const sendPrinter = async () => {
      printerService.createPrinter(printer);
    };
    if (printer) {
      sendPrinter();
    }
  }, [printer]);

  const printerContextValue = {
    printer,
    setPrinter,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
