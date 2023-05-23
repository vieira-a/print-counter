import React, { ReactNode } from "react";
import { IPrinter } from "./IPrinter";

export interface ICounter {
  _id?: string;
  printer: IPrinter | string | undefined;
  copied: number;
  printed: number;
  note?: string;
  counter?: number;
  prevcounter?: number;
  counteramount?: number;
}

export interface ICounterContext {
  counter: ICounter;
  setCounter: React.Dispatch<React.SetStateAction<ICounter>>;
  printers: IPrinter[];
  setPrinters: React.Dispatch<React.SetStateAction<IPrinter[]>>;
  countersPrinters: ICounter[];
  setCountersPrinters: React.Dispatch<React.SetStateAction<ICounter[]>>;
}

export interface ICounterProvider {
  children: ReactNode;
}
