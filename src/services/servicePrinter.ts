import { IPrinter } from "common/interfaces/IPrinter";

const createPrinter = async (
  newPrinter: IPrinter,
  setPrinterMessage: (message: string | undefined) => void
) => {
  try {
    const response = await fetch("http://localhost:3000/api/printer", {
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

export default createPrinter;
