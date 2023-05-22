import { ICounter, ICounterProvider } from "../../common/interfaces/ICounter";
import { IPrinter } from "../../common/interfaces/IPrinter";
import CounterContext from "../../contexts/counterContext";
import { getPrinters } from "../../services/servicePrinter";
import { useEffect, useState } from "react";

export const CounterProvider = ({ children }: ICounterProvider) => {
  const [counter, setCounter] = useState<ICounter>({
    printer: "",
    copied: 0,
    printed: 0,
    note: "",
    counter: 0,
  });

  const [counterPrinters, setCounterPrinters] = useState<IPrinter[]>([]);

  useEffect(() => {
    const getAllPrinters = async () => {
      const data = await getPrinters();
      setCounterPrinters(data);
    };
    getAllPrinters();
  }, []);

  const counterContextValue = {
    counter,
    setCounter,
    counterPrinters,
  };

  return (
    <CounterContext.Provider value={counterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};
