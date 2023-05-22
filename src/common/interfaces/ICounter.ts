import { ReactNode } from "react";

export interface ICounter {
  _id?: string;
  printer: string;
  copied: number;
  printed: number;
  counter: number;
  note: string;
}

export interface ICounterContext {
  counter: ICounter;
  setCounter: (counter: ICounter) => void;
}

export interface ICounterProvider {
  children: ReactNode;
}
