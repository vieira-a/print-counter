import { ReactNode } from "react";
import { IPrinter } from "./IPrinter";

export interface ICounter {
  _id?: string;
  printer: string | undefined;
  copied: number;
  printed: number;
  note?: string;
}

export interface ICounterContext {
  counter: ICounter;
  setCounter: React.Dispatch<React.SetStateAction<ICounter>>;
  counterPrinters: IPrinter[];
  setCounterPrinters: React.Dispatch<React.SetStateAction<IPrinter[]>>;
}

export interface ICounterProvider {
  children: ReactNode;
}
