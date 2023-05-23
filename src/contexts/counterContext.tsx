import { createContext } from "react";
import { ICounterContext } from "@/common/interfaces/ICounter";

const CounterContext = createContext<ICounterContext>({
  counter: {
    printer: "",
    copied: 0,
    printed: 0,
    note: "",
  },
  setCounter: (counter) => counter,
  printers: [],
  setPrinters: (printers) => printers,
  countersPrinters: [],
  setCountersPrinters: (countersPrinters) => countersPrinters,
});

CounterContext.displayName = "Counter";

export default CounterContext;
