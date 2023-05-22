import { ICounter, ICounterProvider } from "@/common/interfaces/ICounter";
import CounterContext from "@/contexts/counterContext";
import { useState } from "react";

export const CounterProvider = ({ children }: ICounterProvider) => {
  const [counter, setCounter] = useState<ICounter>({
    printer: "",
    copied: 0,
    printed: 0,
    note: "",
    counter: 0,
  });

  const counterContextValue = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={counterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};
