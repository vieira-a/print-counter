import { ReactNode } from "react";

export interface IPrinter {
  model: string;
  brand: string;
  serial: string;
  local: string;
  counter: number | string;
}

export interface IPrinterContext {
  printer: IPrinter;
  setPrinter: (printer: IPrinter) => void;
  printerCreated: boolean;
}

export interface IPrinterProvider {
  children: ReactNode;
}
