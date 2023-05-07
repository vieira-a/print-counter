import React, { ReactNode } from "react";

export interface IPrinter {
  _id?: string;
  model: string;
  brand: string;
  serial: string;
  local: string;
  counter: number | string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IPrinterContext {
  printer: IPrinter;
  setPrinter: (printer: IPrinter) => void;

  selectedPrinter?: IPrinter;
  setSelectedPrinter?: React.Dispatch<
    React.SetStateAction<IPrinter | undefined>
  >;

  printerEdit: IPrinter;
  setPrinterEdit: (printerEdit: IPrinter) => void;

  printerMessage: string | undefined;
  setPrinterMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  printers?: IPrinter[];
  setPrinters?: React.Dispatch<React.SetStateAction<IPrinter[]>>;

  getPrinters?: () => void;
  shouldUpdatePrinters: boolean;
  setShouldUpdatePrinters: React.Dispatch<React.SetStateAction<boolean>>;
  deleteSelectedPrinter: (id: string) => void;
}

export interface IPrinterProvider {
  children: ReactNode;
}
