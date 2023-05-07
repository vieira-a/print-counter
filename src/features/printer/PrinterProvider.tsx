import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";
import {
  createPrinter,
  getPrinters,
  deletePrinter,
} from "../../services/servicePrinter";

export const PrinterProvider = ({ children }: IPrinterProvider) => {
  const [printer, setPrinter] = useState<IPrinter>({
    _id: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: "",
  });

  const [printers, setPrinters] = useState<IPrinter[]>([]);

  const [printerEdit, setPrinterEdit] = useState<IPrinter>({
    _id: "",
    model: "",
    brand: "",
    serial: "",
    local: "",
    counter: "",
  });

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

  const deleteSelectedPrinter = (id: string) => {
    if (id) {
      deletePrinter(id);
      setShouldUpdatePrinters(true);
    }
  };

  const printerContextValue = {
    printer,
    setPrinter,
    printers,
    setPrinters,
    getPrinters,
    shouldUpdatePrinters,
    setShouldUpdatePrinters,
    printerMessage,
    setPrinterMessage,
    printerEdit,
    setPrinterEdit,
    deleteSelectedPrinter,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
