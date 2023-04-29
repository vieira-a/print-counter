import { ReactNode } from "react";

export interface IPrinter {
  name: string;
  model: string;
  brand: string;
  serial: string;
  local: string;
  counter: number;
}

export interface IPrinterContext {
  printer: IPrinter;
  setPrinter: (printer: IPrinter) => void;
}

export interface IPrinterProvider {
  children: ReactNode;
}
