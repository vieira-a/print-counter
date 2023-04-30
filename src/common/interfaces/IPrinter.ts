import React, { ReactNode } from "react";

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
  printerMessage: string | undefined;
  setPrinterMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface IPrinterProvider {
  children: ReactNode;
}
