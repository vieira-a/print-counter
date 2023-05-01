import { IPrinter } from "../common/interfaces/IPrinter";

const API_URL = "http://localhost:3000/api/printer";

const createPrinter = async (
  newPrinter: IPrinter,
  setPrinterMessage: (message: string | undefined) => void
) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrinter),
    });
    const data = await response.json();
    console.log(data.msg);
    setPrinterMessage("success");
  } catch (error) {
    console.log(error);
    setPrinterMessage("error");
  }
};

const getPrinters = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { createPrinter, getPrinters };
