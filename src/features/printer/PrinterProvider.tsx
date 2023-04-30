import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";

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
    const createPrinter = async (newPrinter: IPrinter) => {
      try {
        const response = await fetch("http://localhost:3000/api/printer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPrinter),
        });
        const data = await response.json();
        console.log(data.msg);
        setPrinterMessage("success");
      } catch (error) {
        console.log(error);
        setPrinterMessage("error");
      }
    };
    createPrinter(printer);
  }, [printer]);

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
