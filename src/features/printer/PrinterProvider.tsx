import { useEffect, useState } from "react";
import { IPrinter, IPrinterProvider } from "../../common/interfaces/IPrinter";
import PrinterContext from "../../contexts/printerContext";
import {
  createPrinter,
  getPrinters,
  getPrinterBySerial,
  deletePrinter,
} from "../../services/servicePrinter";
import { IDeletedSuccess } from "common/interfaces/IDeletedSuccess";

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
  const [deletedSuccess, setDeletedSuccess] = useState<IDeletedSuccess>({
    status: null,
    message: "",
  });

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

  useEffect(() => {
    if (Object.values(printer).every((value) => !!value)) {
      createPrinter(printer, setPrinterMessage);
      setPrinterMessage("success");
    }
    setShouldUpdatePrinters(true);
  }, [printer]);

  const deleteSelectedPrinter = (id: string) => {
    if (confirm(`Deseja realmente excluir a impressora?`)) {
      try {
        if (id) {
          deletePrinter(id);
        }
        setDeletedSuccess({
          status: true,
          message: "Impressora excluída com sucesso",
        });
        setShouldUpdatePrinters(true);
      } catch (error) {
        console.log(error);
        setDeletedSuccess({
          status: false,
          message: "Erro ao excluir a impressora",
        });
      }
    } else "Impressora não excluída";
    setTimeout(() => {
      setDeletedSuccess({ status: null, message: "" });
    }, 2000);
  };

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
    deleteSelectedPrinter,
    searchPrinterBySerial,
    searchSerial,
    setSearchSerial,
    deletedSuccess,
    setDeletedSuccess,
  };

  return (
    <PrinterContext.Provider value={printerContextValue}>
      {children}
    </PrinterContext.Provider>
  );
};

export default PrinterProvider;
