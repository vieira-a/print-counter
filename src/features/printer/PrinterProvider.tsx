import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "@/contexts/printerContext";
import { createPrinter, getPrinters } from "@/services/servicePrinter";
import useActionNotification from "@/hooks/useActionNotification";
import useFilterPrinterBySerial from "@/hooks/useFilterPrinterBySerial";

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
  const [shouldUpdatePrinters, setShouldUpdatePrinters] = useState(false);
  const [searchSerial, setSearchSerial] = useState("");
  const { actionNotification, showActionNotification } =
    useActionNotification();
  const { printerBySerial, showPrinterBySerial } = useFilterPrinterBySerial();

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

  const getAllPrinters = async () => {
    const data = await getPrinters();
    setPrinters(data);
    setShouldUpdatePrinters(false);
  };

  useEffect(() => {
    getAllPrinters();
  }, [shouldUpdatePrinters]);

  useEffect(() => {
    if (searchSerial) {
      showPrinterBySerial(searchSerial);
    } else {
      setPrintersGrid(printers);
    }
  }, [searchSerial, showPrinterBySerial, printers]);

  useEffect(() => {
    setPrintersGrid(printerBySerial);
  }, [printerBySerial]);

  useEffect(() => {
    if (Object.values(printer).every((value) => !!value)) {
      createPrinter(printer, setPrinterMessage);
      setPrinterMessage("success");
    }
    setShouldUpdatePrinters(true);
  }, [printer]);

  const printerContextValue = {
    printer,
    setPrinter,
    printers,
    printersGrid,
    setPrintersGrid,
    setPrinters,
    getPrinters,
    shouldUpdatePrinters,
    setShouldUpdatePrinters,
    printerMessage,
    setPrinterMessage,
    printerEdit,
    setPrinterEdit,
    searchSerial,
    setSearchSerial,
    actionNotification,
    showActionNotification,
    printerBySerial,
    showPrinterBySerial,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
