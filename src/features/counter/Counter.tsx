import { useContext } from "react";
import CounterContext from "@/contexts/counterContext";

export default function Counter() {
  const { countersPrinters } = useContext(CounterContext);

  console.log(countersPrinters);

  return (
    <>
      <h1>Contador</h1>
    </>
  );
}
