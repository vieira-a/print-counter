import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";
import {
  createPrinter,
  getPrinters,
  getPrinterBySerial,
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
  const [printersBySerial, setPrintersBySerial] = useState<IPrinter[]>([]);

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
  const [searchSerial, setSearchSerial] = useState("");

  useEffect(() => {
    if (shouldUpdatePrinters) {
      getPrinters().then((data) => {
        setPrinters(data);
      });
      setShouldUpdatePrinters(false);
    }
  }, [shouldUpdatePrinters]);

  const searchPrinterBySerial = async (expression: string) => {
    try {
      const data = await getPrinterBySerial(expression);
      setPrintersBySerial(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchPrinterBySerial(searchSerial);
  }, [searchSerial]);

  useEffect(() => {
    if (Object.values(printer).every((value) => !!value)) {
      createPrinter(printer, setPrinterMessage);
      setPrinterMessage("success");
      setShouldUpdatePrinters(true);
    }
    getPrinters().then((data) => {
      setPrinters(data);
    });
  }, [printer]);

  const deleteSelectedPrinter = (id: string) => {
    if (confirm(`Deseja realmente excluir a impressora?`)) {
      if (id) {
        deletePrinter(id);
      }
      getPrinters().then((data) => {
        setPrinters(data);
      });
      setShouldUpdatePrinters(true);
    } else "Impressora não excluída";
  };

  const printerContextValue = {
    printer,
    setPrinter,
    printers,
    setPrinters,
    getPrinters,
    printersBySerial,
    shouldUpdatePrinters,
    setShouldUpdatePrinters,
    printerMessage,
    setPrinterMessage,
    printerEdit,
    setPrinterEdit,
    deleteSelectedPrinter,
    searchPrinterBySerial,
    searchSerial,
    setSearchSerial,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
