import { ICounter, ICounterProvider } from "../../common/interfaces/ICounter";
import { IPrinter } from "../../common/interfaces/IPrinter";
import CounterContext from "../../contexts/counterContext";
import { getPrinters } from "../../services/servicePrinter";
import { getCounters } from "../../services/servicesCounter";
import { useEffect, useState } from "react";

export const CounterProvider = ({ children }: ICounterProvider) => {
  const [counter, setCounter] = useState<ICounter>({
    printer: "",
    copied: 0,
    printed: 0,
    note: "",
  });

  const [countersPrinters, setCountersPrinters] = useState<ICounter[]>([]);
  const [printers, setPrinters] = useState<IPrinter[]>([]);

  const getAllCounters = async () => {
    const data = await getCounters();
    setCountersPrinters(data);
  };

  useEffect(() => {
    getAllCounters();
  }, []);

  useEffect(() => {
    const getAllPrinters = async () => {
      const data = await getPrinters();
      setPrinters(data);
    };
    getAllPrinters();
  }, []);

  const counterContextValue = {
    counter,
    setCounter,
    printers,
    setPrinters,
    countersPrinters,
    setCountersPrinters,
  };

  return (
    <CounterContext.Provider value={counterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};
