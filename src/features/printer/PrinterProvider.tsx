import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";
import {
  createPrinter,
  getPrinters,
  updatePrinter,
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

  const [selectedPrinter, setSelectedPrinter] = useState<IPrinter>();

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
    } else {
      console.log("Erro ao atualizar impressora");
    }
    getPrinters().then((data) => {
      setPrinters(data);
    });
  }, [printer, setPrinterMessage, setShouldUpdatePrinters]);

  useEffect(() => {
    if (
      selectedPrinter?._id &&
      Object.values(printerEdit).every((value) => !!value)
    ) {
      updatePrinter(selectedPrinter?._id, printerEdit);

      setShouldUpdatePrinters(true);
    } else {
      console.log("Erro ao atualizar impressora");
    }
    getPrinters().then((data) => {
      setPrinters(data);
    });
  }, [printerEdit, selectedPrinter?._id]);

  console.log(printerEdit);

  const printerContextValue = {
    printer,
    setPrinter,
    printers,
    setPrinters,
    getPrinters,
    shouldUpdatePrinters,
    printerMessage,
    setPrinterMessage,
    printerEdit,
    setPrinterEdit,
    selectedPrinter,
    setSelectedPrinter,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
