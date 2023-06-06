import React, { ReactNode } from "react";
import { IActionNotification } from "./IActionNotification";
import { IModel } from "./IModel";

export interface IPrinter {
  _id?: string;
  model: IModel | string | undefined;
  brand: string;
  serial: string;
  local: string;
  ipv4: string;
  printed: number | string;
  copied: number | string;
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
  printers?: IPrinter[];
  setPrinters?: React.Dispatch<React.SetStateAction<IPrinter[]>>;
  printersBySerial?: IPrinter[];
  setPrintersBySerial?: React.Dispatch<React.SetStateAction<IPrinter[]>>;
  getPrinters?: () => void;
  shouldUpdatePrinters: boolean;
  setShouldUpdatePrinters: React.Dispatch<React.SetStateAction<boolean>>;
  searchSerial: string;
  setSearchSerial: React.Dispatch<React.SetStateAction<string>>;
  printersGrid: IPrinter[];
  setPrintersGrid: React.Dispatch<React.SetStateAction<IPrinter[]>>;
  actionNotification: IActionNotification;
  showActionNotification: (notification: {
    status: boolean | null;
    message: string;
  }) => void;
  printerBySerial: IPrinter[];
  showPrinterBySerial: (serial: string) => void;
}

export interface IPrinterProvider {
  children: ReactNode;
}
