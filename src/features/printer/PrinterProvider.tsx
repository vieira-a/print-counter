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

  const [printerCreated, setPrinterCreated] = useState(false);

  useEffect(() => {
    const sendPrinter = async () => {
      printerService.createPrinter(printer);
    };
    if (Object.values(printer).every((value) => !!value)) {
      sendPrinter();
      setPrinterCreated(true);
    }
  }, [printer]);

  const printerContextValue = {
    printer,
    setPrinter,
    printerCreated,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
