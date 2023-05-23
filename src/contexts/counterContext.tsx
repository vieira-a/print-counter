import { createContext } from "react";
import { ICounterContext } from "@/common/interfaces/ICounter";

const CounterContext = createContext<ICounterContext>({
  counter: {
    printer: "",
    copied: 0,
    printed: 0,
    note: "",
    counter: 0,
  },
  setCounter: (counter) => counter,
  counterPrinters: [],
  setCounterPrinters: (counterPrinters) => counterPrinters,
});

CounterContext.displayName = "Counter";

export default CounterContext;
