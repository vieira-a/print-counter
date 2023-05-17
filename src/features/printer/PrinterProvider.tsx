import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "@/contexts/printerContext";
import {
  createPrinter,
  getPrinters,
  getPrinterBySerial,
} from "@/services/servicePrinter";
import useActionNotification from "@/hooks/useActionNotification";

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
  const [printersGrid, setPrintersGrid] = useState<IPrinter[]>([]);
  const [printersBySerial, setPrintersBySerial] = useState<IPrinter[]>([]);
  const { actionNotification, showActionNotification } =
    useActionNotification();

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

  const getAllPrinters = async () => {
    const data = await getPrinters();
    setPrinters(data);
    setShouldUpdatePrinters(false);
  };

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

  console.log(searchSerial);

  useEffect(() => {
    if (Object.values(printer).every((value) => !!value)) {
      createPrinter(printer, setPrinterMessage);
      setPrinterMessage("success");
    }
    setShouldUpdatePrinters(true);
  }, [printer]);

  useEffect(() => {
    getAllPrinters();
  }, [shouldUpdatePrinters]);

  useEffect(() => {
    const showPrintersGrid = () => {
      if (!searchSerial) {
        setPrintersGrid(printers);
      } else {
        setPrintersGrid(printersBySerial);
      }
    };
    showPrintersGrid();
  }, [searchSerial, printers, printersBySerial]);

  const printerContextValue = {
    printer,
    setPrinter,
    printers,
    printersGrid,
    setPrintersGrid,
    setPrinters,
    getPrinters,
    printersBySerial,
    shouldUpdatePrinters,
    setShouldUpdatePrinters,
    printerMessage,
    setPrinterMessage,
    printerEdit,
    setPrinterEdit,
    searchPrinterBySerial,
    searchSerial,
    setSearchSerial,
    actionNotification,
    showActionNotification,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
